package entity

import (
	"time"
	"gorm.io/gorm"
)

type Payment struct {
	gorm.Model
	DOB      time.Time
	Bank     string
	Amount   int
	
	
	MemberID *uint
	Member   Member `gorm:"foreignKey:MemberID"`
	
	OccupationID *uint
	Occupation   Occupation `gorm:"foreignKey:OccupationID"`
	
	ServiceID *uint
	Service   Service `gorm:"foreignKey:ServiceID"`
	
	AdminID *uint
	Admin   Admin `gorm:"foreignKey:AdminID"`
	
	
}



