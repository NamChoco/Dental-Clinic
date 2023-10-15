package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/B6428549/payment/entity"
)
// POST /users
func CreatePayment(c *gin.Context) {
	var payment  entity.Payment
	var service entity.Service
	var member entity.Member

	// bind เข้าตัวแปร user
	if err := c.ShouldBindJSON(&payment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	
	// The error you're encountering is likely here, where payment.Member.Username is empty
	if tx := entity.DB().Where("id = ?", payment.MemberID).First(&member); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member not found"})
		return
	}
		
	
	// ค้นหา gender ด้วย id
	if tx := entity.DB().Where("id = ?", payment.ServiceID).First(&service); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "payment not found"})
		return
	}

	// สร้าง User
	p := entity.Payment{
		Service: service,         // โยงความสัมพันธ์กับ Entity Gender
		Member: member,
		Namecard: payment.Namecard, // ตั้งค่าฟิลด์ Name
		Namepay: payment.Namepay,
		Amountpay: payment.Amountpay,
		Upload: payment.Upload,	
	}

	// บันทึก
	if err := entity.DB().Create(&p).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": p})
}

// GET /user/:id
func GetPayment(c *gin.Context) {
	var payment entity.Payment
	id := c.Param("id")
	if err := entity.DB().Preload("Service").Preload("Member").Raw("SELECT * FROM payments WHERE id = ?", id).Find(&payment).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	
	c.JSON(http.StatusOK, gin.H{"data": payment})
}

// GET /users
func ListPayments(c *gin.Context) {
	var payments []entity.Payment
	if err := entity.DB().Preload("Service").Preload("Member").Raw("SELECT * FROM payments").Find(&payments).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	
	c.JSON(http.StatusOK, gin.H{"data": payments})
}
// DELETE /users/:id
func DeletePayment(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM payments WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}
