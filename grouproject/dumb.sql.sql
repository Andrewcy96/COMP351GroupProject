-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 26, 2021 at 10:53 PM
-- Server version: 5.7.34
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `andrewc1_Bronze`
--

-- --------------------------------------------------------

--
-- Table structure for table `Counter`
--

CREATE TABLE `Counter` (
  `PostCounter` int(4) NOT NULL,
  `PutCounter` int(4) NOT NULL,
  `DeleteCounter` int(4) NOT NULL,
  `GetCounter` int(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Counter`
--

INSERT INTO `Counter` (`PostCounter`, `PutCounter`, `DeleteCounter`, `GetCounter`) VALUES
(1, 0, 1, 1),
(1, 0, 1, 1),
(1, 0, 1, 1),
(1, 0, 0, 0),
(1, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `FamousQuotes`
--

CREATE TABLE `FamousQuotes` (
  `ID` int(10) NOT NULL,
  `Quote` varchar(1000) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `FamousQuotes`
--

INSERT INTO `FamousQuotes` (`ID`, `Quote`) VALUES
(2, 'hello amir');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `FamousQuotes`
--
ALTER TABLE `FamousQuotes`
  ADD PRIMARY KEY (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
