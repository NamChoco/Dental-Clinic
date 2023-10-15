package entity

import (
	"time"

	"gorm.io/gorm"
)


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
	Title string
	Price string

	Payment []Payment `gorm:"foreignKey:ServiceID"`
	
}

type Payment struct {
	gorm.Model
	Namecard    string
	Namepay    string
	Amountpay   string
	Upload   string `gorm:"type:longtext"`
	CreatedAt time.Time `gorm:"autoUpdateTime:milli"`

	ServiceID *uint
	Service   Service `gorm:"references:id"`
	MemberID *uint
	Member  Member `gorm:"references:id"`
	
}

type Occupation struct {
    gorm.Model
    Name     string
    
    Member   []Member `gorm:"foreignKey:OccupationID"`
}




