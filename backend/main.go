package main

import (
	"github.com/gin-gonic/gin"
	"github.com/B6428549/payment/controller"
	"github.com/B6428549/payment/entity"
)

func main() {
	entity.SetupDatabase()
	r := gin.Default()
	r.Use(CORSMiddleware())

	// Gender Routes
	r.GET("/services", controller.ListServices)
	r.GET("/occupations", controller.ListOccupations)

	r.GET("/members", controller.ListMembers)
	r.GET("/member/:id", controller.GetMember)
	r.POST("/members", controller.CreateMember)

	r.GET("/payments", controller.ListPayments)
	r.GET("/payment/:id", controller.GetPayment)
	r.POST("/payments", controller.CreatePayment)
	// Run the server
	r.Run()
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}