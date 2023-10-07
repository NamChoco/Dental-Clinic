package entity

import (
	
	"gorm.io/gorm"
)

type Service struct {
	gorm.Model
	Title	string
	Amount	int

	
	
	Payments   []Payment `gorm:"foreignKey:ServiceID"`
}


