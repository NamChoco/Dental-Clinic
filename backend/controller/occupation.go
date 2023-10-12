package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/B6428549/payment/entity2"
)

// GET /genders
func ListOccupations(c *gin.Context) {
	var occupations []entity.Occupation
	if err := entity.DB().Raw("SELECT * FROM occupations").Scan(&occupations).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": occupations})
}