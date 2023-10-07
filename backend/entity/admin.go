package entity

import (
	"gorm.io/gorm"
)

type Admin struct {
	gorm.Model

	Username  string `gorm:"uniqueIndex"`
	Password  string
	Firstname string
	Lastname  string
	Email     string `gorm:"uniqueIndex"`

	
	Payments  []Payment `gorm:"foreignKey:AdminID"`

}


