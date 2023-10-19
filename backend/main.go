package main

import (
	"github.com/B6428549/payment/controller"
	"github.com/B6428549/payment/entity"
	"github.com/gin-gonic/gin"
)

const PORT = "8080"

func main() {
	entity.SetupDatabase()
	r := gin.Default()
	r.Use(CORSMiddleware())
	// Member Routes
	r.POST("/members", controller.CreateMember)
	r.GET("/members", controller.ListMembers)
	r.GET("/member/:username", controller.LoginMemberByUsername)

	// Occupation Routes
	r.GET("/occupations", controller.ListOccupations)
	// Gender Routes
	r.GET("/genders", controller.ListGenders)

	// Dentist Routes
	r.GET("/dentist/:username", controller.LoginDentistByUsername)
	
	// Admin Routes
	r.GET("/admin/:username", controller.LoginAdminByUsername)

	// Payment Routes
	r.GET("/payments", controller.ListPayments)
	r.POST("/payments", controller.CreatePayment)
	r.GET("/payments/:id", controller.GetPayment)
	r.DELETE("/payments/:id", controller.DeletePayment)
	// Service Routes
	r.GET("/services", controller.ListServices)

	// Run the server
	r.Run("localhost: " + PORT)

}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
