-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: lumiere_db
-- ------------------------------------------------------
-- Server version	8.0.28

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

DROP DATABASE IF EXISTS lumiere_db;
CREATE DATABASE lumiere_db;
USE lumiere_db;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_product` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `discount` float NOT NULL,
  `id_category` varchar(255) DEFAULT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(2000) NOT NULL,
  PRIMARY KEY (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (8,'SECADOR',8550,10,'6','Este producto cuenta con una exclusiva tecnología NANO TOURMALINE que brinda a la fibra capilar el cuidado más destacado ya que previene que el cabello se debilite a causa del extremo calor.','products-1647393784686.jpg'),(9,'Lavasecarropas automático Whirlpool WCF09BY inverter',98500,15,'En oferta','Whirlpool es sinónimo de tecnología de punta, diseño e innovación pensados para simplificar el día a día. Un electrodoméstico para toda la vida.\r\nTrabaja solo:\r\nÚnicamente necesita que se introduzcan los productos de limpieza y se elija el programa deseado. A diferencia de los semiautomáticos, no requiere que estés presente en todas las etapas del proceso, por lo que vas a tener prendas limpias y perfumadas sin esfuerzo.\r\nTecnología inverter:Reduce el ruido y las vibraciones, aún en velocidad máxima de centrifugado. A su vez, requiere un menor consumo de agua y electricidad','products-1647393942151.jpg'),(10,'Licuadora Peabody PE-LN800 1.5 L roja con jarra de vidrio 220V',13999,35,'Electrohogar','Un electrodoméstico infaltable en tu casa. La licuadora Peabody PE-LN800 te va a ayudar a obtener resultados increíbles en todo lo que prepares, ya sea que quieras disfrutar de una bebida bien fría, de salsas y sopas, o de postres deliciosos. ¡Tenela siempre a mano!\r\n -Su función pulsar te permite poner en marcha el producto de forma intermitente según lo necesites o de acuerdo al contenido de la jarra. Su cierre de seguridad impide accidentes por descuidos y preserva la limpieza de tu cocina al evitar derrames.\r\n -Es apta para moler hielo en segundos y preparar smoothies refrescantes en los días de calor. Además, podés hacer tus propios tragos de coctelería en casa sin necesidad de ir a un bar. Ahora el bartender ¡Sos vos! \r\n-Su cuchilla removible asegura que el lavado sea impecable y evita la acumulación de residuos que podrían perjudicar el sabor de los alimentos.\r\n','products-1647394119326.jpg'),(11,'Combo 4 Sillas Kansas 1 Mesa Redonda Negra Mascardi',25000,30,'En oferta','Combo 4 Sillas Kansas 1 Mesa Redonda Negra Mascardi: Sillas Kansas:  Alto:  88cm / Profundidad: 41cm / Ancho: 43cm Mesa Redonda: 100cm','products-1647394634748.jpg'),(13,'Sony PlayStation 5 825GB Standard color blanco y negro',88000,10,'Tecnologia y celulares','Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. Adaptada a tus necesidades. Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 825 GB. Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición. Por otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.\r\n','products-1647394822493.jpg'),(14,'SMART TV SAMSUNG SERIES 7 LED 4K 50P',70000,10,'TV, Audio y Video','Su increíble calidad de imagen es posible gracias al procesador Crystal UHD 4K, el cual ofrece amplia gama de colores vivos y vibrantes; Su estilo minimalista e ilimitado se aprecia desde todos los ángulos.\r\n','products-1647394978601.jpg'),(15,'ASPIRADORA INALAMBRICA ELECTROLUX ERG26',25550,25,'Electrohogar','La aspiradora ERG26 de Electrolux cuenta con una capacidad de 420 ml. A su vez, posee boquilla Pet Care, que consiste en un cepillo motorizado con mejor desempeño en alfombras resultando ideal para pelos de mascotas. Además, cuenta con luz frontal.','products-1647395018510.jpg'),(16,'Difusor Ultrasonico 300ml GADNIC',6000,15,'Climatización','¡Tecnología de vaporización ultrasónica! No utiliza calor, lo que permite que el difusor de esencias de gran capacidad GADNIC mantenga la integridad y las propiedades holísticas. Está diseñado para humidificar el aire en habitaciones de hasta 30 metros cuadrados y el área de cobertura de aromaterapia es de hasta 50 metros cuadrados. Podes irte a dormir, apagar la luz y configurar el temporizador del mismo para que se apague en 2 o 4 horas.','products-1647396159363.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(300) NOT NULL,
  `confirm_password` varchar(300) NOT NULL,
  `fav_category_id` varchar(100) NOT NULL,
  `date_of_birth` varchar(100) NOT NULL,
  `address` varchar(200) NOT NULL,
  `user` varchar(100) NOT NULL,
  `avatar_id` varchar(2000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Leandro Ortiz','leandro.ortiz@it-one.com.ar','$2a$10$dhozGLtHn2yV/GN8rt88j.K.liw48amByIitvD9YIcM7mdZv1Wq3y','12qaz','TV, Audio y Video','2021-12-08','caseros 291','lortiz17','user-1647130586169.jpg'),(25,'ortiz leandro','lean_0517@hotmail.com','$2a$10$VJjH1MqaJoVrd3UiOSW8yuDVkYpc7ybqm8jdvtBTX75l1gK8RAk4y','$2a$10$F0R67.lJgi5nCt4Pz.cyduJuhoqPA5Zrq2AX6JGxDokml9f5UqIvu','TV, Audio y Video','1991-05-17','caseros 291','Lean17','user-1647299931534.jpg'),(26,'Alejandro Alturria','alturria31@gmail.com','$2a$10$JX70/RqhmawJdWBZ.rWLU.ycAnTl.UgN4Dyidsh.gc6.nFx3VLPVq','$2a$10$0NAhYAbXjRccI9ROrVxLSOKW7X/5S3XrYXvTh9M8iAKgL8IP/ESpS','Cuidado Personal','1998-10-11','Villegas 2207','AleAlt','user-1647314628290.jpg'),(27,'Mr. Alejandro','alejandro6@live.com.ar','$2a$10$euBVveJcFKZ1JSLYxEGR0uQ95oMi0BSiJn3mpUOcdaSlg6DJxpKV.','$2a$10$Hus4BU6ypyAAWUkhTjJis.dkWYLe8xox5FrD//3tqQYG6YLHWUpMG','TV, Audio y Video','1998-10-11','Villegas 2207','Mr. Ale','user-1647398688401.jpg'),(28,'Ale Alt','alejandro10@live.com.ar','$2a$10$Ie2fGlLdZQjoSUee7PvhNOG.Sw9m1SCWxbp6J4qZFBqFR7j3v72om','$2a$10$PHo1j8cPBR5LVEzFh5q7MevcSNzojtKsu0H8fRt4kWgJnop4HVRuO','TV, Audio y Video','1998-10-11','Villegas 2207','Mr. Ale','user-1647398797903.jpg'),(29,'Veronica ','vero@gmail.com','$2a$10$.4B/Nypo/Me5aRKhtuFKWe11HJiCuf/Ck22AuLdSMmu57Qqg2DBLS','$2a$10$QEz8SNcrKzfPFDPDXhW7tuna3ONFKur3j2786vjKr1aL7zMfQ/CeO','Tecnologia y celulares','1964-01-13','Villegas 2207','Varito64','user-1647398955833.jpg'),(30,'Veronica 1','vero1@gmail.com','$2a$10$nRlTJGi07Ba3173/MK0aX.t53krftP3TkRmfSD0IMNDOYpgfv5Wgy','$2a$10$G/d2bYTOiELy6r3X/rXxXeX.tjkJAIjhKtkP.4Onj0CKJmQVsY3l6','Tecnologia y celulares','1964-01-13','Villegas 2207','Varito641','user-1647399044204.jpg'),(31,'Vero1010','vero101010@gmail.com','$2a$10$CrGNe7rkNhzU07VYiXsKPu4OFS/iZnM7KeCNCdh9KN9QYiadJM12W','$2a$10$0BwlSBUioblEm1xA.EaVPeGAK.cldb5VfVO2QiM6vrHFQMQsk4LPu','Tecnologia y celulares','1964-01-13','Villegas 2207','vero1010','user-1647399670854.jpg'),(32,'Veronica 1212','vero10101r0@gmail.com','$2a$10$lNyjss3I4yxP8NV9DMRs0OykMGsPwDwAoyFCDU1I9H090qUOsPhn6','$2a$10$jeKNDn40xT3mOYkv2dj.HO6Y/eZ8pKm6XY/C8KNOtaSTKL9fwnVtW','Climatización','1964-12-11','Villegas 2207','vero1212','user-1647399781635.jpg'),(33,'vero1111','ver1111@gmail.com','$2a$10$t.wZ6Uywshe2LpyOFss6HO8zIYLIqJmSBxfOBwaWcqvcmCpWeR0IK','$2a$10$4Fe5kcqkAr6XdtF5R1N87urhghEiIBnkYRK4fvifEvc0/PVnxVz/W','TV, Audio y Video','1985-11-11','Villegas 2207','vero11111','user-1647400035748.jpg'),(34,'veroooooooo','vero1212121@gmail.com','$2a$10$CHlz0cM.1.U9vgbS3.0P0e/I5g.Wok4jZviWYy35Uo8YkyFiFrxma','$2a$10$8DU.tjCKHNC0tE4XxAj.eONsACnr75VoSAsHRpWYpyfy8Efh.1Va.','TV, Audio y Video','1945-12-12','Villegas 2207','bverooooooo','user-1647400278530.jpg'),(35,'213123','123123@13123.com','$2a$10$hCvM0T/KLSlX4yrrB2stFeLuMM7mRoWJBc.d9H1TQDvChxMY2fCMW','$2a$10$mKs9SpdAsQIJcsmAaGC1B.8..WDqGqDVCDkK6sMqgq0RnRuwkudk6','Tecnologia y celulares','1987-02-01','123123','123123','user-1647400534546.jpg'),(36,'123123','12312223@13123.com','$2a$10$pqzqBsuwcW/D1ngBx67XpOQqSNoeo4nmX1k4wIKr6vvkuGPNG.JC2','$2a$10$8y1cWbu1qpDsHhlFYU18X.9Pfpn97BRngRB4uG5MwXAlIplhmgkxm','Tecnologia y celulares','1985-12-10','123123','123123','user-1647400644610.jpg'),(37,'123123','1231222223@13123.com','$2a$10$w./yA36Nl2iuZI91EQOpvOGfzTyfPTca.tW0aSPPE/MZfWVjHA1AS','$2a$10$LbLq3g54J/reNhcmKhHFUODRZ2nV6JV8Im81Tj0P6MSHZX5DcAy6K','Climatización','1987-03-12','121313','123123','user-1647400787246.jpg'),(38,'123123','vero909090@gmail.com','$2a$10$POQDGKnl6lJdGJf6OS8WI.SsPpwSxr.73EaB0KrEeAU2CXmWgER7a','$2a$10$GqbLG9/lNKxxUSNPZzlgu.BFTPPLKVijUXbErDSu0Yaw2GKZdaXZS','Climatización','1987-03-12','123123','123123','user-1647401533355.jpg'),(39,'123123123','12322123@13123.com','$2a$10$wdpY9s6zsGzuGlMs5SjZAegrVMsGLXOjN8T/g4X3022E/3kTIDvZy','$2a$10$Sg0J9dV/H2OWzWXqsTWM.OV1Umbwvyh3w5npwcslwv5BObgc215SS','TV, Audio y Video','1986-02-11','123123','1231231223','user-1647401673709.jpg'),(40,'123213','12312222223@13123.com','$2a$10$2mQATzuSzThOSmq6q0WLmeG7xAPsrok1sU7qnjJbpqDHpscSNlZzO','$2a$10$EjDu6xnmqK3sCqUrmhl54OXOGDZYCw5zKIP3gJ3F7srkG0KUrNYEq','Tecnologia y celulares','1987-03-12','12313','12314124','user-1647401734703.jpg'),(41,'Ripley','tenienteripley@gmail.com','$2a$10$9cNjH5FwarUqGpzToG6z..L.dS14vfPJPckEQOT8Y9gFWc99qy.0C','$2a$10$b8YsyJeQALK4VC3vpan1mOq92AhJwNUg1o469Y5eEDajcEjc4hqVa','Cuidado Personal','2019-09-19','Villegas 2207','TRipley','user-1647474069911.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-16 21:20:51
