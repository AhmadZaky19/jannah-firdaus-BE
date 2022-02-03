-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 03, 2022 at 07:35 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jannah-firdaus`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` varchar(255) NOT NULL,
  `productName` varchar(255) NOT NULL,
  `productImage` varchar(255) DEFAULT NULL,
  `price` int(20) NOT NULL,
  `stock` int(20) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `productName`, `productImage`, `price`, `stock`, `createdAt`, `updatedAt`) VALUES
('fb2af97c-ba9d-43bb-a68c-ca7a4f3ca847', 'Jeruk', '2022-02-03T10-43-28.607Zjeruk.jpg', 14000, 13, '2022-02-03 10:43:28', NULL),
('d6304762-d788-4e99-8d66-2fe35e24cdd1', 'Mangga', '2022-02-03T18-09-52.684Zmangga1.jpg', 16000, 30, '2022-02-03 10:44:21', '2022-02-03 18:09:52'),
('7f098cf3-b9c8-40c3-b0c3-5aa935f6e956', 'Buah Naga', '2022-02-03T17-38-30.379Znaga.jpg', 15000, 14, '2022-02-03 10:44:46', '2022-02-03 17:38:30'),
('77b2983b-c500-44fd-9e4b-660872376d36', 'Anggur', '2022-02-03T17-38-10.802Zanggur.jpg', 25000, 9, '2022-02-03 10:45:23', '2022-02-03 17:47:12'),
('2818a958-af19-4125-8458-a25c86980a9e', 'Apel', '2022-02-03T17-37-56.899Zapel.jpg', 23000, 13, '2022-02-03 13:22:52', '2022-02-03 17:37:56');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
