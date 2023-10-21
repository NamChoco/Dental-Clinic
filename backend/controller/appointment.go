package controller

import (
	"net/http"

	"github.com/B6428549/payment/entity"
	"github.com/gin-gonic/gin"
)

//POST
func CreateAppointment(c *gin.Context) {
	var appointment entity.Appointment
	var member entity.Member
	var dentist entity.Dentist

	// Bind JSON request to the appointment variable
	if err := c.ShouldBindJSON(&appointment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Check if the member exists
	if tx := entity.DB().Where("id = ?", appointment.MemberID).First(&member); tx.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Member not found"})
		return
	}

	// Check if the dentist exists
	if tx := entity.DB().Where("id = ?", appointment.DentistID).First(&dentist); tx.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Dentist not found"})
		return
	}

	// Create a new appointment object
	newAppointment := entity.Appointment{
		Datie:  appointment.Datie,
		Time: appointment.Time,
		Problem:   appointment.Problem,
		DentistID: appointment.DentistID,
		Dentist: dentist,
		MemberID: appointment.MemberID,
		Member: member,
	}

	// Save the new appointment to the database
	if err := entity.DB().Create(&newAppointment).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create appointment"})
		return
	}

	// Return a success response
	c.JSON(http.StatusOK, gin.H{"message": "Appointment created successfully", "appointment": newAppointment})
}
	// GET /Member,Dentist/:id
func GetAppointment(c *gin.Context) {
	var appointment entity.Appointment
	id := c.Param("id")
	if err := entity.DB().Preload("Member").Preload("Dentist").Raw("SELECT * FROM appointments WHERE id = ?", id).Find(&appointment).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": appointment})
}
	// GET /appointments	
func ListAppointment(c *gin.Context) {
	var appointment []entity.Appointment
	if err := entity.DB().Preload("Member").Preload("Dentist").Raw("SELECT * FROM appointments").Find(&appointment).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": appointment})
}


