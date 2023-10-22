package controller

import (
	"net/http"

	"github.com/B6428549/payment/entity"
	"github.com/gin-gonic/gin"
)

// POST /members
func CreateMember(c *gin.Context) {
	var member entity.Member
	var occupation entity.Occupation
	var gender entity.Gender
	var admin entity.Admin

	// bind เข้าตัวแปร member
	if err := c.ShouldBindJSON(&member); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// ค้นหา Occupation ด้วย id
	if tx := entity.DB().Where("id = ?", member.OccupationID).First(&occupation); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "occupation not found"})
		return
	}

	// ค้นหา Gender ด้วย id
	entity.DB().Where("id = ?", member.GenderID).First(&gender)
	if gender.ID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "occupation not found"})
		return
	}

	// ค้นหา admin ด้วย id
	if tx := entity.DB().Where("id = ?", member.AdminID).First(&admin); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "occupation not found"})
		return
	}

	// สร้าง Member
	u := entity.Member{
		Username:     member.Username, // ตั้งค่าฟิลด์ Username
		Password:     member.Password,
		FirstName:    member.FirstName,    // ตั้งค่าฟิลด์ FirstNamemember
		LastName:     member.LastName,     // ตั้งค่าฟิลด์ LastName
		Email:        member.Email,        // ตั้งค่าฟิลด์ Email
		Birthday:     member.Birthday,     // ตั้งค่าฟิลด์ Bod
		Phone_number: member.Phone_number, // ตั้งค่าฟิลด์ Phone

		OccupationID: member.OccupationID, // ตั้งค่าฟิลด์ occupation
		Occupation:   occupation,          // ตั้งค่าฟิลด์ occupation

		GenderID: member.GenderID,
		Gender:   	  gender,

		AdminID: member.AdminID,
		Admin:   	  admin,
	}

	// บันทึก
	if err := entity.DB().Create(&u).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": u})
}

// GET /members
func ListMembers(c *gin.Context) {
	var members []entity.Member
	if err := entity.DB().Raw("SELECT * FROM members").Find(&members).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": members})
}

// GET /member/:username
func GetMemberByUsername(c *gin.Context) {
	var member entity.Member
	username := c.Param("username")
	if err := entity.DB().Preload("Admin").Preload("Occupation").Preload("Gender").Raw("SELECT * FROM members WHERE username = ?", username).Find(&member).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": member})
}

// GET LOGIN/member/:username
func LoginMemberByUsername(c *gin.Context) {
	var member entity.Member
	username := c.Param("username")
	if err := entity.DB().Preload("Occupation").Preload("Gender").Preload("Admin").Raw("SELECT * FROM members WHERE username = ?", username).Find(&member).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": member})
}

func UpdateMember(c *gin.Context) {
	var member entity.Member
	var result entity.Member

	if err := c.ShouldBindJSON(&member); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา member ด้วย id
	if tx := entity.DB().Where("id = ?", member.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user not found"})
		return
	}

	if err := entity.DB().Save(&member).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": member})
}

// DELETE /member/:username
func DeleteMember(c *gin.Context) {
	username := c.Param("username")
	if tx := entity.DB().Exec("DELETE FROM members WHERE username = ?", username); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": username})
}
