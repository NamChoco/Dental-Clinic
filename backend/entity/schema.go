package entity

import (
	"time"

	"gorm.io/gorm"
)

type Appointment struct {
	gorm.Model
	Datie 	 time.Time
	Problem  string
	Time	 time.Time

	MemberID *uint
	Member   Member `gorm:"foreignKey:MemberID"`

	DentistID *uint
	Dentist   Dentist `gorm:"foreignKey:DentistID"`
	// clear
}

type Member struct {
	gorm.Model
	Username     string
	Password     string
	FirstName    string
	LastName     string
	Email        string
	Birthday     string
	Phone_number string

	Appointment []Appointment `gorm:"foreignKey:MemberID"`

	Payment []Payment `gorm:"foreignKey:MemberID"`

	History []History `gorm:"foreignKey:MemberID"`

	GenderID *uint
	Gender   Gender `gorm:"foreignKey:GenderID"`

	OccupationID *uint
	Occupation   Occupation `gorm:"foreignKey:OccupationID"`

	AdminID *uint
	Admin   Admin `gorm:"foreignKey:AdminID"`
	// clear
}

type Dentist struct {
	gorm.Model

	Username     string
	Password     string
	FirstName    string
	LastName     string
	Email        string
	Birthday     string
	Phone_number string

	GenderID *uint
	Gender   Gender `gorm:"foreignKey:GenderID"`

	AdminID *uint
	Admin   Admin `gorm:"foreignKey:AdminID"`

	Appointment []Appointment `gorm:"foreignKey:DentistID"`

	History []History `gorm:"foreignKey:DentistID"`
	// clear
}

type Gender struct {
	gorm.Model
	Name string

	Member []Member `gorm:"foreignKey:GenderID"`
	// clear
}

type Occupation struct {
	gorm.Model
	Name string

	Member []Member `gorm:"foreignKey:OccupationID"`
	// clear
}

type Admin struct {
	gorm.Model

	Username  string
	Password  string
	FirstName string
	LastName  string
	Email     string
	// clear
	Dentist []Dentist `gorm:"foreignKey:AdminID"`

	Member []Member `gorm:"foreignKey:AdminID"`
}

type Payment struct {
	gorm.Model
	Namecard  string
	Namepay   string
	Amountpay string
	Upload    string    `gorm:"type:longtext"`
	CreatedAt time.Time `gorm:"autoUpdateTime:milli"`

	ServiceID *uint
	Service   Service `gorm:"references:id"`

	MemberID *uint
	Member   Member `gorm:"references:id"`
	// clear
}

type History struct {
	gorm.Model

	Date      string
	CreatedAt time.Time `gorm:"autoUpdateTime:milli"`

	GenderID *uint
	Gender   Gender `gorm:"references:id"`

	MemberID *uint
	Member   Member `gorm:"foreignKey:MemberID"`

	DentistID *uint
	Dentist   Dentist `gorm:"foreignKey:DentistID"`

	ServiceID *uint
	Service   Service `gorm:"foreignKey:ServiceID"`
	// clear
}

type Service struct {
	gorm.Model
	Title string 
	Price string

	Payment []Payment `gorm:"foreignKey:ServiceID"`
	History []History `gorm:"foreignKey:ServiceID"`
	// clear
}
