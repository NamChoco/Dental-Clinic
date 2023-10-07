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

