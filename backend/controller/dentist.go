package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/B6428549/payment/entity"
)

// GET / Dentist/:username
func LoginDentistByUsername(c *gin.Context) {
	var dentist entity.Dentist
	username := c.Param("username")
	if err := entity.DB().Preload("Admin").Preload("Gender").Raw("SELECT * FROM dentists WHERE username = ?", username).Find(&dentist).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": dentist})
}


// GET /dentists
func ListDentist(c *gin.Context) {
	var dentists []entity.Dentist
	if err := entity.DB().Raw("SELECT * FROM dentists").Scan(&dentists).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": dentists})
}

