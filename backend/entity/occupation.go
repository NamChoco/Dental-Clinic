package entity

import (
    "gorm.io/gorm"
)

type Occupation struct {
    gorm.Model

    OccupationName string
    Discount   float64


	Members  []Member `gorm:"foreignKey:OccupationID"`
}

