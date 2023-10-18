package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/B6428549/payment/entity"
)


// POST /users
func CreateHistory(c *gin.Context) {
	var user entity.History
	var member entity.Member
	var service entity.Service
	var dentist entity.Dentist

	// bind เข้าตัวแปร user
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// ค้นหา Member ด้วย id
	if tx := entity.DB().Where("id = ?", user.MemberID).First(&member); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member not found"})
		return
	}

	if tx := entity.DB().Where("id = ?", user.ServiceID).First(&service); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "service not found"})
		return
	}

	if tx := entity.DB().Where("id = ?", user.DentistID).First(&dentist); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "dentist not found"})
		return
	}

	// สร้าง User
	u := entity.History{
		Member:    member,
		Dentist:   dentist,
		Service:   service,

		Date:      user.Date,      // ตั้งค่าฟิลด์ วันเวลา
	}

	// บันทึก
	if err := entity.DB().Create(&u).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": u})
}


// GET /user/:id
func GetHistory(c *gin.Context) {
	id := c.Param("id")
	var user entity.History

	if err := entity.DB().Preload("Gender").Preload("Service").Preload("Member").Where("id = ?", id).Find(&user).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": user})
}

func GetHistoryBYid(c *gin.Context) {
	id := c.Param("id")
	var user entity.History

	if err := entity.DB().Preload("Gender").Preload("Service").Preload("Member").Where("id = ?", id).Find(&user).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": user})
}

// GET /users
func ListHistories(c *gin.Context) {
	var users []entity.History

	if err := entity.DB().Preload("Gender").Preload("Service").Preload("Member").Preload("Dentist").Find(&users).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}


	c.JSON(http.StatusOK, gin.H{"data": users})
}

func ListHistoriesByUserID(c *gin.Context) {
	// รับค่า Username จากคุกกี้
	username := c.Request.Header.Get("Name")// ใช้ชื่อของคุกกี้ที่คุณต้องการ

	var histories []entity.History

	// สร้างคำสั่งค้นหาด้วยเงื่อนไข Username
	query := entity.DB().Preload("Gender").Preload("Service").Preload("Member")

	if username != "" {
		query = query.Where("member.firstname = ?", username)
	}

	if err := query.Find(&histories).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": histories})
}


// DELETE /users/:id
func DeleteHistory(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM histories WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /users
func UpdateHistory(c *gin.Context) {
	var user entity.History
	var result entity.History

	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา user ด้วย id
	if tx := entity.DB().Where("id = ?", user.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user not found"})
		return
	}

	if err := entity.DB().Save(&user).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": user})
}

// Get history: username
func GetHistoryByUsername(c *gin.Context) {
	id := c.Param("username")
	var user entity.History

	if err := entity.DB().Preload("Gender").Preload("Service").Preload("Member").Where("id = ?", id).Find(&user).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": user})
}

//func ListHistories(c *gin.Context) {
//	var users []entity.History
//
//	if err := entity.DB().Preload("Gender").Preload("List").Preload("Member").Find(&users).Error; err != nil {
//		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
//		return
//	}
//
//
//	c.JSON(http.StatusOK, gin.H{"data": users})
//}



