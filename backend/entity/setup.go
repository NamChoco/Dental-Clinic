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
	database, err := gorm.Open(sqlite.Open("payment.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	// Migrate the schema
	database.AutoMigrate(

		&Service{},
		&Payment{},
		&Member{},
		&Occupation{},

	)

	db = database

	// // Gender Data
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


	// // Occupation Data
	// student := Occupation{
	// 	Name: "นักเรียน",
	// }
	// db.Model(&Occupation{}).Create(&student)

	// us := Occupation{
	// 	Name: "ทั่วไป",	
	// }
	// db.Model(&Occupation{}).Create(&us)

}