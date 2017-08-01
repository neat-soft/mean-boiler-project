-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 02, 2017 at 01:13 AM
-- Server version: 5.5.57-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `mean`
--

-- --------------------------------------------------------

--
-- Table structure for table `social`
--

CREATE TABLE IF NOT EXISTS `social` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `instagram` int(11) NOT NULL,
  `blog` int(11) NOT NULL,
  `twitter` int(11) NOT NULL,
  `youtube` int(11) NOT NULL,
  `pinterest` int(11) NOT NULL,
  `location` varchar(255) NOT NULL,
  `facebook` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=441 ;

--
-- Dumping data for table `social`
--

INSERT INTO `social` (`id`, `name`, `email`, `instagram`, `blog`, `twitter`, `youtube`, `pinterest`, `location`, `facebook`) VALUES
(431, 'xKqeV', 'iY8bd@gmail.com', 652, 540, 888, 377, 547, 'London', 558),
(432, '4GeKk', 'b4wsp@gmail.com', 741, 437, 421, 898, 446, 'London', 956),
(433, 'HxaGT', '1yHSn@outlook.com', 784, 20, 879, 656, 998, 'Paris', 414),
(434, 'rgOLC', 't9CYd@gmail.com', 687, 174, 73, 504, 806, 'London', 442),
(435, '6oaVC', 'KCCsc@outlook.com', 444, 256, 847, 188, 559, 'Paris', 326),
(436, 'YzGeL', 'FkhzM@yahoo.com', 740, 759, 32, 724, 705, 'Kiev', 664),
(437, 'JRwEZ', '7B8OT@gmail.com', 225, 530, 742, 362, 40, 'London', 106),
(438, 'eYaGI', 'q92t3@gmail.com', 569, 43, 320, 137, 486, 'London', 481),
(439, 'ual6Q', 'LU8Ut@outlook.com', 922, 610, 900, 281, 10, 'Paris', 128),
(440, 'ep1Uk', 'xeMpo@gmail.com', 503, 475, 9, 738, 991, 'London', 477);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
