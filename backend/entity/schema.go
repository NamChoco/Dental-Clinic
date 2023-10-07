package entity

import (
    "time"
    "gorm.io/gorm"
)

type Member struct {
    gorm.Model
    BOD         time.Time
    Username    string `gorm:"uniqueIndex"`
    Password    string
    Firstname   string
    Lastname    string
    Email       string `gorm:"uniqueIndex"`
    Gender      string
    PhoneNumber string `gorm:"uniqueIndex"`

    Payments     []Payment `gorm:"foreignKey:MemberID"`
    OccupationID *uint
    Occupation   Occupation `gorm:"foreignKey:OccupationID"`
   
}



type Occupation struct {
    gorm.Model

    OccupationName string
    Discount   float64


	Members  []Member `gorm:"foreignKey:OccupationID"`
}

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

type Service struct {
	gorm.Model
	Title	string
	Amount	int

	
	
	Payments   []Payment `gorm:"foreignKey:ServiceID"`
}

type Admin struct {
	gorm.Model

	Username  string `gorm:"uniqueIndex"`
	Password  string
	Firstname string
	Lastname  string
	Email     string `gorm:"uniqueIndex"`

	
	Payments  []Payment `gorm:"foreignKey:AdminID"`

}