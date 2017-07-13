-- phpMyAdmin SQL Dump
-- version 2.11.2.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 07 月 10 日 03:44
-- 服务器版本: 5.0.45
-- PHP 版本: 5.2.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- 数据库: `baidu`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(16) NOT NULL auto_increment,
  `newsTitle` varchar(16) NOT NULL,
  `newsContent` varchar(16) NOT NULL,
  `imgSrc` varchar(16) NOT NULL,
  `newsFrom` varchar(16) NOT NULL,
  `newsDate` datetime NOT NULL,
  `newsTag` varchar(16) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=77 ;

--
-- 导出表中的数据 `news`
--

INSERT INTO `news` (`id`, `newsTitle`, `newsContent`, `imgSrc`, `newsFrom`, `newsDate`, `newsTag`) VALUES
(59, '法法', '发安抚', 'images/9.jpg', '法法', '2017-07-04 00:00:00', '本地'),
(65, '将老师', '法法', 'images/10.jpg', '范德萨', '2017-07-07 00:00:00', '推荐'),
(66, '广东省', '看就看', 'images/10.jpg', '法法', '2017-07-07 00:00:00', '推荐'),
(67, '你看了', ' 发顺丰', 'images/10.jpg', 'fdsf', '2017-07-07 00:00:00', '社会'),
(68, '发简历是', '发顺丰', 'images/9.jpg', 'fsf', '2017-07-07 00:00:00', '推荐'),
(69, '解放路', '发顺丰', 'images/10.jpg', 'fa', '2017-07-07 00:00:00', '推荐'),
(70, '了司法局', '发顺丰', 'images/10.jpg', 'fs', '2017-07-07 00:00:00', '推荐'),
(71, '更多', '经理', 'images/10.jpg', 'fsf', '2017-07-07 00:00:00', '推荐'),
(73, '辅导费', '发生过', 'images/9.jpg', 'gldgj', '2017-07-07 00:00:00', '百家'),
(74, '观复嘟嘟', '个地方', 'images/9.jpg', 'fsf', '2017-07-07 00:00:00', '推荐'),
(75, '甲方领导', '接发了时间', 'images/9.jpg', 'fdsfg', '2017-07-07 00:00:00', '推荐'),
(76, 'jgdl', 'gfdg', 'images/10.jpg', 'fdsf', '2017-07-07 15:14:00', '百家');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(16) NOT NULL auto_increment,
  `usersName` varchar(16) NOT NULL,
  `password` tinytext NOT NULL,
  `state` varchar(16) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=75 ;

--
-- 导出表中的数据 `users`
--

INSERT INTO `users` (`id`, `usersName`, `password`, `state`) VALUES
(1, 'aa', '11', '离线'),
(2, 'aaaaaa', 'aaaaaa', '离线'),
(3, 'qqqqqq', 'qqqqqq', '离线'),
(4, 'qqqqqq', 'qqqqqq', '离线'),
(5, 'zzzzzz', 'zzzzzz', '离线'),
(6, 'zzzzzz', 'zzzzzz', '离线'),
(7, 'ffffff', 'ffffff', '离线'),
(8, 'ffffff', 'ffffff', '离线'),
(9, 'xxxxxx', 'xxxxxx', '离线'),
(10, 'xxxxxx', 'xxxxxx', '离线'),
(11, 'xxxxxx', 'xxxxxx', '离线'),
(12, 'xxxxxx', 'xxxxxx', '离线'),
(13, 'xxxxxx', 'xxxxxx', '离线'),
(14, 'xxxxxx', 'xxxxxx', '离线'),
(15, 'xxxxxx', 'xxxxxx', '离线'),
(16, 'xxxxxx', 'xxxxxx', '离线'),
(17, 'xxxxxx', 'xxxxxx', '离线'),
(18, 'xxxxxx', 'xxxxxx', '离线'),
(19, 'xxxxxx', 'xxxxxx', '离线'),
(20, 'xxxxxx', 'xxxxxx', '离线'),
(21, 'xxxxxx', 'xxxxxx', '离线'),
(22, 'xxxxxx', 'xxxxxx', '离线'),
(23, 'xxxxxx', 'xxxxxx', '离线'),
(24, 'xxxxxx', 'xxxxxx', '离线'),
(25, 'xxxxxx', 'xxxxxx', '离线'),
(26, 'xxxxxx', 'xxxxxx', '离线'),
(27, 'xxxxxx', 'xxxxxx', '离线'),
(28, 'xxxxxx', 'xxxxxx', '离线'),
(29, 'xxxxxx', 'xxxxxx', '离线'),
(30, 'xxxxxx', 'xxxxxx', '离线'),
(31, 'xxxxxx', 'xxxxxx', '离线'),
(32, 'xxxxxx', 'xxxxxx', '离线'),
(33, 'xxxxxx', 'xxxxxx', '离线'),
(34, 'xxxxxx', 'xxxxxx', '离线'),
(35, 'xxxxxx', 'xxxxxx', '离线'),
(36, 'xxxxxx', 'xxxxxx', '离线'),
(37, 'xxxxxx', 'xxxxxx', '离线'),
(38, 'xxxxxx', 'xxxxxx', '离线'),
(39, 'xxxxxx', 'xxxxxx', '离线'),
(40, 'xxxxxx', 'xxxxxx', '离线'),
(41, 'xxxxxx', 'xxxxxx', '离线'),
(42, 'xxxxxx', 'xxxxxx', '离线'),
(43, 'xxxxxx', 'xxxxxx', '离线'),
(44, 'xxxxxx', 'xxxxxx', '离线'),
(45, 'xxxxxx', 'xxxxxx', '离线'),
(46, 'xxxxxx', 'xxxxxx', '离线'),
(47, 'xxxxxx', 'xxxxxx', '离线'),
(48, 'xxxxxx', 'xxxxxx', '离线'),
(49, 'xxxxxx', 'xxxxxx', '离线'),
(50, 'xxxxxx', 'xxxxxx', '离线'),
(51, 'xxxxxx', 'xxxxxx', '离线'),
(52, 'yyyyyy', 'yyyyyy', '离线'),
(53, 'yyyyyy', 'yyyyyy', '离线'),
(54, 'gggggg', 'ggggggg', '离线'),
(55, 'gggggg', 'ggggggg', '离线'),
(56, 'gggggg', 'ggggggg', '离线'),
(57, 'gggggg', 'ggggggg', '离线'),
(58, 'vvvvvv', 'vvvvvv', '离线'),
(59, 'vvvvvv', 'vvvvvv', '离线'),
(60, 'vvvvvv', 'vvvvvv', '离线'),
(61, 'tttttt', 'tttttt', '离线'),
(62, 'tttttt', 'dddddd', '离线'),
(63, 'tttttt', '333333', '离线'),
(64, 'tttttt', '333333', '离线'),
(65, '000000', '000000', '离线'),
(67, '888888', '888888', '离线'),
(68, '999999', '52c69e3a57331081', '离线'),
(69, '999999', '52c69e3a57331081', '离线'),
(70, '123456', 'e10adc3949ba59ab', '离线'),
(71, '654321', 'c33367701511b4f6', '离线'),
(72, '121212', '93279e3308bdbbee', '离线'),
(73, '131313', 'e04755387e5b5968ec213e41f70c1d46', '在线'),
(74, '232323', '2467d3744600858cc9026d5ac6005305', '离线');
