package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/B6428549/payment/entity"
)

// GET / Admin /:username
func LoginAdminByUsername(c *gin.Context) {
	var admin entity.Admin
	username := c.Param("username")
	if err := entity.DB().Raw("SELECT * FROM admins WHERE username = ?", username).Find(&admin).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": admin})
}

// GET /admin
func ListAdmin(c *gin.Context) {
	var admins []entity.Admin
	if err := entity.DB().Raw("SELECT * FROM admins").Scan(&admins).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": admins})
}


