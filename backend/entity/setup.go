package entity

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB //ประกาศตัวแปปรเป็น object ของ gorm

func DB() *gorm.DB { //รับ object จัดการฐานข้อมูล
	return db //คืนค่า object 
}

func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("Clinic.db"), &gorm.Config{}) //กำหนดการเชื่อมต่อกับฐานข้อมูล
	if err != nil {
		panic("Failed to connect database")
	}

	// Migrate the schema
	database.AutoMigrate(   //สร้าง แก้ไข โครงสร้าง
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
	// male := Gender{
	// 	Name: "ชาย",
	// }
	// db.Model(&Gender{}).Create(&male)

	// female := Gender{
	// 	Name: "หญิง",
	// }
	// db.Model(&Gender{}).Create(&female)
	// // ------------------------------

	// // Occupation Data
	// student := Occupation{
	// 	Name: "นักเรียน",
	// }
	// db.Model(&Occupation{}).Create(&student)

	// teacher := Occupation{
	// 	Name: "ครู",
	// }
	// db.Model(&Occupation{}).Create(&teacher)
	// CPE := Occupation{
	// 	Name: "CPE",
	// }
	// db.Model(&Occupation{}).Create(&CPE)
	// architect := Occupation{
	// 	Name: "สถาปนิก",
	// }
	// db.Model(&Occupation{}).Create(&architect)
	// ------------------------------

	// Dentist Data
	// usernameD := Dentist{
	// 	Username: "GITTI",
	// 	Password: "1234",
	// 	FirstName: "Panu",
	// 	LastName: "sriwisut",
	// 	Email: "panu",
	// 	Birthday: "2023-10-01",
	// 	Phone_number: "0987654321",
	// }
	// db.Model(&Dentist{}).Create(&usernameD)
	
	// ------------------------------

	// Admin Data
	// usernameA := Admin{
	// 	Username: "Komsan",
	// 	Password: "0000",
	// 	FirstName: "Komsansan",
	// 	LastName: "sriwichai",
	// 	Email: "sansan@gmail.com",
	// }
	// db.Model(&Admin{}).Create(&usernameA)
	// ------------------------------

	// Service Data
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
