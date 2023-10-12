package entity

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	FirstName string
	LastName  string
	Email     string
	Phone     string
	Amountpay   string
	Profile   string `gorm:"type:longtext"`
	// GenderID ทำหน้าที่เป็น FK
	ServiceID *uint
	Service   Service `gorm:"references:id"`


}

type Member struct {
	gorm.Model
	
	Profile   string `gorm:"type:longtext"`
    Username    string `gorm:"uniqueIndex"`
    Password    string
    Firstname   string
    Lastname    string
    Email       string `gorm:"uniqueIndex"`
    Gender      string
    PhoneNumber string `gorm:"uniqueIndex"`

    Payment    []Payment `gorm:"foreignKey:MemberID"`
    OccupationID *uint
    Occupation   Occupation `gorm:"references:id"`
}

type Service struct {
	gorm.Model
	Name string
	Amount string
	User []User `gorm:"foreignKey:ServiceID"`
	Payment []Payment `gorm:"foreignKey:ServiceID"`
	
}

type Payment struct {
	gorm.Model
	Name    string
	Amountpay   string
	Profile   string `gorm:"type:longtext"`

	ServiceID *uint
	Service   Service `gorm:"references:id"`
	MemberID *uint
	Member  Member `gorm:"references:id"`
	
}

type Occupation struct {
    gorm.Model
    Name string
   

	Member  []Member `gorm:"foreignKey:OccupationID"`
}