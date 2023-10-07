package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/B6428549/payment/entity"
)

// GET /genders
func ListServices(c *gin.Context) {
	var services []entity.Service
	if err := entity.DB().Raw("SELECT * FROM services").Scan(&services).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": services})
}