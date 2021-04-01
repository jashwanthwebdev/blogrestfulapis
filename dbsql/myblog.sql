-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 01, 2021 at 06:32 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myblog`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `Bid` int(11) NOT NULL,
  `title` text NOT NULL,
  `image` text NOT NULL,
  `content` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`Bid`, `title`, `image`, `content`, `createdAt`, `updatedAt`, `count`) VALUES
(2, 'My First Blog 1', '1615650701589-home2.jpg', 'Hard Work Pays Off...!!', '2021-03-13', '2021-03-13', 2),
(3, 'My First Blog 1', '1615650739080-home2.jpg', 'Hard Work Pays Off...!!', '2021-03-13', '2021-03-13', 0),
(4, 'My First Blog 1', '1615650741063-home2.jpg', 'Hard Work Pays Off...!!', '2021-03-13', '2021-03-13', 0),
(5, 'My First Blog..', '1615700814515-female.png', 'Hey Looking for more technologies...', '2021-03-14', '2021-03-14', 0);

-- --------------------------------------------------------

--
-- Table structure for table `bloglikes`
--

CREATE TABLE `bloglikes` (
  `lid` int(11) NOT NULL,
  `Bid` int(11) NOT NULL,
  `mobile` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bloglikes`
--

INSERT INTO `bloglikes` (`lid`, `Bid`, `mobile`) VALUES
(1, 2, '9032771453');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `Rid` int(11) NOT NULL,
  `firstname` text NOT NULL,
  `lastname` text NOT NULL,
  `mobile` text NOT NULL,
  `username` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `role` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`Rid`, `firstname`, `lastname`, `mobile`, `username`, `email`, `password`, `role`) VALUES
(6, 'Jashwanth', 'kumar', '9032771453', 'aerva', 'aerva@gmail.com', '$2b$10$UdT1zPr5X4rmEpJ7dxeBBOOX2v3Wcs87VKKs0scsbfQ79.rndnphe', ''),
(7, 'Jashwanth', 'Kumar', '9032771453', 'admin', 'admin@gmail.com', '$2b$10$QBiB9sChkWhar/drZqc2XOLOsrRBKKSW2fcrv3QoKhvUYm4.xl4oG', 'admin1'),
(8, 'Jaswanth kumar', 'Aerva', '9032771453', 'admin', 'adminblog@gmail.com', '$2b$10$smelozboPHpMe/41IFYX7e6PcR6uAl942pFc2bfU/0fwKskoWJ0s2', 'admin'),
(9, 'Jaswanth kumar', 'Aerva', '9032771453', 'admin', 'jash@gmail.com', '$2b$10$EWT4XzOOiLgFvwxV15XAsuDy2BLsVezlh8KCo1R9HFnxWjJqQbq5.', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`Bid`);

--
-- Indexes for table `bloglikes`
--
ALTER TABLE `bloglikes`
  ADD PRIMARY KEY (`lid`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`Rid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `Bid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `bloglikes`
--
ALTER TABLE `bloglikes`
  MODIFY `lid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `Rid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
