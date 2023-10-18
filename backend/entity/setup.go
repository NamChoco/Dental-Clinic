package entity

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("Clinic.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect database")
	}

	// Migrate the schema
	database.AutoMigrate(
		&Member{},
		&Occupation{},
		&Dentist{},
		&Admin{},
		&Gender{},
		&History{},
		&Appointment{},
		&Payment{},
		&Service{},

	)

	db = database

	// Gender Data
	male := Gender{
		Name: "ชาย",
	}
	db.Model(&Gender{}).Create(&male)

	female := Gender{
		Name: "หญิง",
	}
	db.Model(&Gender{}).Create(&female)
	// // ------------------------------

	// // Occupation Data
	student := Occupation{
		Name: "นักเรียน",
	}
	db.Model(&Occupation{}).Create(&student)

	teacher := Occupation{
		Name: "ครู",
	}
	db.Model(&Occupation{}).Create(&teacher)
	CPE := Occupation{
		Name: "แก้จนเป็นบ้า",
	}
	db.Model(&Occupation{}).Create(&CPE)
	// ------------------------------

	// // Dentist Data
	// usernameD := Dentist{
	// 	Username: "GITTI",
	// 	Password: "1234567890",
	// 	FirstName: "Panu",
	// 	LastName: "sriwisut",
	// 	Email: "",
	// 	Phone_number: "แก้จนเป็นบ้า",
	// }
	// db.Model(&Dentist{}).Create(&usernameD)
	
	// // ------------------------------

	// // Admin Data
	// usernameA := Admin{
	// 	Username: "Komsan",
	// 	Password: "0000",
	// 	FirstName: "Komsansan",
	// 	LastName: "sriwichai",
	// 	Email: "sansan@gmail.com",
	// }
	// db.Model(&Admin{}).Create(&usernameA)
	// // ------------------------------

	// // Service Data
	// one := Service{
	// 	Title: "อุดฟัน",
	// 	Price: "1000",
	// }
	// db.Model(&Service{}).Create(&one)

	// two := Service{
	// 	Title: "ถอนฟัน",
	// 	Price: "2000",
	// }
	// db.Model(&Service{}).Create(&two)

	// three := Service{
	// 	Title: "ขูดหินปูน",
	// 	Price: "500",
	// }
	// db.Model(&Service{}).Create(&three)

}
