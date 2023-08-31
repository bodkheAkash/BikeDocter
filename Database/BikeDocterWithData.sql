CREATE DATABASE  IF NOT EXISTS `bikedoctor` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bikedoctor`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: bikedoctor
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `areas`
--

DROP TABLE IF EXISTS `areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `areas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `area` varchar(255) DEFAULT NULL,
  `city_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `city_id_idx` (`city_id`),
  CONSTRAINT `city_id` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `areas`
--

LOCK TABLES `areas` WRITE;
/*!40000 ALTER TABLE `areas` DISABLE KEYS */;
INSERT INTO `areas` VALUES (1,'Karve Nagar',1),(2,'Hadapsar',1),(3,'Kharadi',1),(4,'Hinjewadi',1),(5,'Deccan',1),(6,'Andheri',3),(7,'Malad',3),(8,'Ghatkopar',3),(9,'Bokaro',4),(10,'Deoghar',4),(11,'Gokhale Nagar',1),(12,'Arvi Naka',2),(13,'S Nagar',2);
/*!40000 ALTER TABLE `areas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bikes`
--

DROP TABLE IF EXISTS `bikes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bikes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `make_id` int NOT NULL,
  `model` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `make_id_idx` (`make_id`),
  CONSTRAINT `make_id` FOREIGN KEY (`make_id`) REFERENCES `makes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bikes`
--

LOCK TABLES `bikes` WRITE;
/*!40000 ALTER TABLE `bikes` DISABLE KEYS */;
INSERT INTO `bikes` VALUES (1,1,'Activa'),(2,2,'Shine');
/*!40000 ALTER TABLE `bikes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `booking_date` date DEFAULT NULL,
  `appointment_date` date DEFAULT NULL,
  `package_id` int NOT NULL,
  `ser_cen_id` int NOT NULL,
  `bike_id` int NOT NULL,
  `bike_reg_no` varchar(255) NOT NULL,
  `base_price` int NOT NULL,
  `extra_price` int NOT NULL,
  `estimated_price` int NOT NULL,
  `statusid` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cust_id_idx` (`customer_id`),
  KEY `package_id_idx` (`package_id`),
  KEY `serv_cent_id_idx` (`ser_cen_id`),
  KEY `bike_id_idx` (`bike_id`),
  KEY `status_id_idx` (`statusid`),
  CONSTRAINT `bike_id` FOREIGN KEY (`bike_id`) REFERENCES `bikes` (`id`),
  CONSTRAINT `cust_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `package_id` FOREIGN KEY (`package_id`) REFERENCES `packages` (`id`),
  CONSTRAINT `serv_cent_id` FOREIGN KEY (`ser_cen_id`) REFERENCES `service_centre` (`id`),
  CONSTRAINT `status_id` FOREIGN KEY (`statusid`) REFERENCES `statuses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (1,6,'2023-08-23','2023-08-23',1,1,1,'MH31DM3201',800,1000,1800,2),(2,6,'2023-08-23','2023-08-26',1,1,1,'456',800,800,800,3),(3,6,'2023-08-23','2023-08-31',2,1,1,'456+3',0,0,0,1),(4,6,'2023-08-23','2023-08-25',3,1,1,'4532',0,0,0,1),(9,6,'2023-08-23','2023-08-30',1,1,1,'4532',0,0,0,1),(10,6,'2023-08-24','2023-08-29',1,1,1,'4532',0,0,0,1),(11,6,'2023-08-24','2023-09-09',2,1,1,'MH32Dm123',0,0,0,1),(12,7,'2023-08-25','2023-08-19',2,1,1,'MH32Dm1234',0,0,0,1),(13,8,'2023-08-27','2023-08-21',1,1,1,'MH32DM3210',0,1000,1000,1),(14,12,'2023-08-27','2023-08-28',1,1,2,'shine',0,500,500,1),(18,12,'2023-08-27','2023-08-29',2,1,1,'MH32DM1234',0,1000,0,1),(19,12,'2023-08-27','2023-08-29',2,1,1,'MH32',0,0,0,1),(20,8,'2023-08-27','2023-08-30',1,1,1,'MH32DM6372',0,0,0,1),(21,8,'2023-08-27','2023-08-30',1,1,1,'MH32DM6372',800,1000,1800,1),(22,8,'2023-08-27','2023-08-30',1,1,1,'MH32DM3210',800,0,0,1),(23,8,'2023-08-27','2023-08-29',1,1,1,'MH32Dm3210',800,0,0,1),(24,13,'2023-08-27','2023-08-28',1,1,1,'MH32DM3210',800,0,0,1),(25,8,'2023-08-27','2023-08-29',1,1,1,'MH32DM6372',800,0,0,1),(26,8,'2023-08-27','2023-08-29',1,1,1,'MH32DM6372',800,0,0,1),(27,8,'2023-08-27','2023-08-28',1,1,1,'MH32DM3210',800,0,0,1),(28,8,'2023-08-27','2023-08-28',1,1,1,'MH32DM3210',800,0,0,1),(29,8,'2023-08-27','2023-08-30',1,1,1,'MH32DM6372',800,1000,1800,1),(30,15,'2023-08-27','2023-08-29',1,1,1,'MH32DM3201',800,0,0,1),(31,16,'2023-08-27','2023-08-29',3,1,2,'MH31CN1234',1800,0,0,4);
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Pune'),(2,'Wardha'),(3,'Mumbai'),(4,'Ranchi'),(5,'Patna');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `area_id` int NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `login_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `login_id_idx` (`login_id`),
  KEY `area_id_idx` (`area_id`),
  CONSTRAINT `area_cust_id` FOREIGN KEY (`area_id`) REFERENCES `areas` (`id`),
  CONSTRAINT `login_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (6,'Suraj','Bodkhe',1,'123456789','Suraj@gmail.com',6),(7,'Pranjal','Bodkhe',1,'08830921147','akashbodakhe99@gmail.com',9),(8,'User','User',1,'123456789','User@gmail.com',10),(11,'Deep','Singh',6,'8809881806','singh@gmail.com',14),(12,'Akash','Bodkhe',12,'08830921147','akashbodakhe99@gmail.com',15),(13,'Check','Check',12,'123456789','akashbodakhe99@gmail.com',16),(14,'Akash','Bodkhe',12,'8830921147','akashbodakhe99@gmail.com',20),(15,'Akash ','Bodkhe',1,'8830921147','akashbodakhe99@gmail.com',46),(16,'nehagauri','patil',5,'1234567890','pranjal@gmail.com',47);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `security_ques_id` int NOT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `user_type_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sec_ques_id_idx` (`security_ques_id`),
  KEY `user_type_id_idx` (`user_type_id`),
  CONSTRAINT `sec_ques_id` FOREIGN KEY (`security_ques_id`) REFERENCES `security_questions` (`id`),
  CONSTRAINT `user_type_id` FOREIGN KEY (`user_type_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'akash','Ak@sh2810',1,'Wardha',3),(6,'suraj','Akasg',1,'suraj',1),(7,'servicecenter','servicecenter',1,'servicecenter',2),(8,'Suraj123','Suraj',1,'suraj',2),(9,'3128','Siya@123',3,'Akash',1),(10,'User','user@123',1,'User',1),(14,'deepak','N0LMZIR0tTrpO8NyTIJYG2/lVQgKg4druqEiKsY6AQM=',2,'ranchi',1),(15,'AkashBD','iNG6jC9SgDy5kQSKZ0zcgUMTLlPP5x374GTXCDbJ4GU=',2,'Wardha',1),(16,'Check','XVGa07vVqJKZ93i8AO0VRD1JSbI6kbQbJAiL2ZynOMA=',1,'Check',1),(17,'check','Chech@2810',1,'User',2),(18,'check','Chech@2810',1,'User',2),(19,'check','Rutvij@123',1,'User',2),(20,'3128','bV6Jx1qfO3HfNvRl2DOCiuxlkcwKdu9WRMAQPNcXnLA=',1,'Akash',1),(21,'suraj','Suraj@123',1,'ghj',2),(22,'suraj','Suraj@123',1,'ghj',2),(23,'suraj','Suraj@123',1,'ghj',2),(24,'suraj','Suraj@123',1,'ghj',2),(25,'suraj','Suraj@123',1,'ghj',2),(26,'suraj','Suraj@123',1,'ghj',2),(27,'suraj','Suraj@123',1,'ghj',2),(28,'suraj','Suraj@123',1,'ghj',2),(29,'suraj','Suraj@123',1,'ghj',2),(30,'suraj','Suraj@123',1,'ghj',2),(31,'suraj','Suraj@123',1,'ghj',2),(32,'suraj','Suraj@123',1,'ghj',2),(33,'suraj','Suraj@123',1,'ghj',2),(34,'suraj','Suraj@123',1,'ghj',2),(35,'suraj','Suraj@123',1,'ghj',2),(36,'suraj','Suraj@123',1,'ghj',2),(37,'suraj','Suraj@123',1,'ghj',2),(38,'suraj','Suraj@123',1,'ghj',2),(39,'suraj','Suraj@123',1,'ghj',2),(40,'suraj','Suraj@123',1,'ghj',2),(41,'suraj','Suraj@123',1,'ghj',2),(42,'suraj','Suraj@123',1,'ghj',2),(43,'suraj','Suraj@123',1,'ghj',2),(44,'suraj','Suraj@123',1,'ghj',2),(45,'suraj','Suraj@123',1,'ghj',2),(46,'akash','Ak@sh1999',1,'Akash',1),(47,'1192','Pranjal@@31',2,'nagpur',1);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `makes`
--

DROP TABLE IF EXISTS `makes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `makes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `makes`
--

LOCK TABLES `makes` WRITE;
/*!40000 ALTER TABLE `makes` DISABLE KEYS */;
INSERT INTO `makes` VALUES (1,'Hero'),(2,'Honda');
/*!40000 ALTER TABLE `makes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packages`
--

DROP TABLE IF EXISTS `packages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL,
  `cost` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packages`
--

LOCK TABLES `packages` WRITE;
/*!40000 ALTER TABLE `packages` DISABLE KEYS */;
INSERT INTO `packages` VALUES (1,'Basic','Oil change,air filter cleaning',800),(2,'Regular','Oil change,air filter cleaning,carburator cleaning,nult bolt fitting,washing',1200),(3,'Premium','Oil change,air filter cleaning,carburator tuning,complete overhauling,brakes setting,washing,polishing',1800);
/*!40000 ALTER TABLE `packages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_modes`
--

DROP TABLE IF EXISTS `payment_modes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_modes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `payment_mode` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_modes`
--

LOCK TABLES `payment_modes` WRITE;
/*!40000 ALTER TABLE `payment_modes` DISABLE KEYS */;
INSERT INTO `payment_modes` VALUES (1,'UPI'),(2,'Credit Card'),(3,'Net Banking'),(4,'Pay at Service Centre');
/*!40000 ALTER TABLE `payment_modes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rating` int NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `customer_id` int NOT NULL,
  `serv_cen_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id_idx` (`customer_id`),
  KEY `ser_centre_id_idx` (`serv_cen_id`),
  CONSTRAINT `customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `ser_centre_id` FOREIGN KEY (`serv_cen_id`) REFERENCES `service_centre` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES (1,4,'Nice',6,1),(2,4,'good',6,1),(3,5,'Good',6,1),(4,3,'Good',6,2),(5,2,'Good',6,3),(6,4,'check',8,2),(7,4,'Nice Experience',11,3);
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Customer'),(2,'Service Center'),(3,'Admin');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `security_questions`
--

DROP TABLE IF EXISTS `security_questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `security_questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `security_questions`
--

LOCK TABLES `security_questions` WRITE;
/*!40000 ALTER TABLE `security_questions` DISABLE KEYS */;
INSERT INTO `security_questions` VALUES (1,'What was your favorite food as a child?'),(2,'In which city were you born?'),(3,'What is the name of your favorite pet?'),(4,'What was the make of your first car?'),(5,'What is your favorite sport?'),(6,'Who was your childhood hero?');
/*!40000 ALTER TABLE `security_questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_centre`
--

DROP TABLE IF EXISTS `service_centre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_centre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `area_id` int NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `login_id` int NOT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `login_id_idx` (`login_id`),
  KEY `area_sc_id_idx` (`area_id`),
  CONSTRAINT `area_sc_id` FOREIGN KEY (`area_id`) REFERENCES `areas` (`id`),
  CONSTRAINT `login_sc_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_centre`
--

LOCK TABLES `service_centre` WRITE;
/*!40000 ALTER TABLE `service_centre` DISABLE KEYS */;
INSERT INTO `service_centre` VALUES (1,'servicecenter',1,'8830921147','servicecenter@gmail.com',7,1),(2,'Suraj',1,'8830921147','akashbodakhe99@gmail.com',8,1),(3,'Akash',1,'8830921147','@gmail.com',1,0),(5,'Akash Devidasrao Bodkhe',12,'8830921147','akashbodakhe99@gmail.com',17,0),(6,'Akash Devidasrao Bodkhe',12,'8830921147','akashbodakhe99@gmail.com',18,0),(7,'Akash Devidasrao Bodkhe',12,'8830921147','akashbodakhe99@gmail.com',19,0),(8,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',21,0),(9,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',22,0),(10,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',23,0),(11,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',24,0),(12,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',25,0),(13,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',26,0),(14,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',27,0),(15,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',28,0),(16,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',29,0),(17,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',30,0),(18,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',31,0),(19,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',32,0),(20,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',33,0),(21,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',34,0),(22,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',35,0),(23,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',36,0),(24,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',37,0),(25,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',38,0),(26,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',39,0),(27,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',40,0),(28,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',41,0),(29,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',42,0),(30,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',43,0),(31,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',44,0),(32,'Akash Devidasrao Bodkhe',12,'0883092114','akashbodakhe99@gmail.com',45,0);
/*!40000 ALTER TABLE `service_centre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statuses`
--

DROP TABLE IF EXISTS `statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statuses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
INSERT INTO `statuses` VALUES (1,'Waiting'),(2,'In Progress'),(3,'Ready for Delivery'),(4,'Delivered');
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` int NOT NULL,
  `customer_id` int NOT NULL,
  `date` date DEFAULT NULL,
  `payment_mode_id` int NOT NULL,
  `bookingid` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id_idx` (`customer_id`),
  KEY `payment_id_idx` (`payment_mode_id`),
  KEY `payment_mode_id_idx` (`payment_mode_id`),
  KEY `cstmr_id_idx` (`customer_id`),
  KEY `booking_id_idx` (`bookingid`),
  CONSTRAINT `cstmr_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `payment_mode_id` FOREIGN KEY (`payment_mode_id`) REFERENCES `payment_modes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (1,1300,6,'2023-08-26',1,1),(2,1300,6,'2023-08-26',1,1),(3,1300,8,'2023-08-27',1,1),(4,1300,8,'2023-08-27',1,1),(5,1300,8,'2023-08-27',1,1),(6,1800,8,'2023-08-27',2,29);
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-31 12:10:49
