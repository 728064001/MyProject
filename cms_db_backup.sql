/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50151
Source Host           : localhost:3306
Source Database       : cms_db

Target Server Type    : MYSQL
Target Server Version : 50151
File Encoding         : 65001

Date: 2013-08-06 18:30:25
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `books_tab`
-- ----------------------------
DROP TABLE IF EXISTS `books_tab`;
CREATE TABLE `books_tab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classificationid` int(11) DEFAULT NULL,
  `barcode` varchar(60) NOT NULL,
  `bookname` varchar(30) NOT NULL,
  `press` varchar(50) NOT NULL,
  `author` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`,`barcode`),
  KEY `books_bookclassid_fk` (`classificationid`),
  KEY `barcode` (`barcode`),
  CONSTRAINT `books_bookclassid_fk` FOREIGN KEY (`classificationid`) REFERENCES `booksclass_tab` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of books_tab
-- ----------------------------

-- ----------------------------
-- Table structure for `booksclass_tab`
-- ----------------------------
DROP TABLE IF EXISTS `booksclass_tab`;
CREATE TABLE `booksclass_tab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bookclass` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of booksclass_tab
-- ----------------------------
INSERT INTO `booksclass_tab` VALUES ('1', '办公'), ('2', '计算机软件'), ('3', '小说'), ('4', '文学'), ('5', '艺术'), ('6', '动漫'), ('7', '旅游'), ('8', '地理'), ('9', '生活'), ('10', '历史'), ('11', '传记'), ('12', '管理'), ('13', '经济'), ('14', '法律');

-- ----------------------------
-- Table structure for `booksuse_history_tab`
-- ----------------------------
DROP TABLE IF EXISTS `booksuse_history_tab`;
CREATE TABLE `booksuse_history_tab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `persionid` int(11) NOT NULL,
  `bookbarcode` varchar(60) NOT NULL,
  `bookname` varchar(40) NOT NULL,
  `boorowtime` date NOT NULL,
  `boorowtimelength` double NOT NULL,
  `returntime` date NOT NULL,
  `shijireturntime` date NOT NULL,
  `jjstatus` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `booksuse_history_personid_fk` (`persionid`),
  KEY `booksuse_history_bookbarcode` (`bookbarcode`),
  KEY `booksuse_history_jjstatus_fk` (`jjstatus`),
  CONSTRAINT `booksuse_history_bookbarcode` FOREIGN KEY (`bookbarcode`) REFERENCES `books_tab` (`barcode`),
  CONSTRAINT `booksuse_history_jjstatus_fk` FOREIGN KEY (`jjstatus`) REFERENCES `jjstatus_tab` (`id`),
  CONSTRAINT `booksuse_history_personid_fk` FOREIGN KEY (`persionid`) REFERENCES `person_tab` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of booksuse_history_tab
-- ----------------------------

-- ----------------------------
-- Table structure for `booksuse_tab`
-- ----------------------------
DROP TABLE IF EXISTS `booksuse_tab`;
CREATE TABLE `booksuse_tab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `persionid` int(11) NOT NULL,
  `bookbarcode` varchar(60) NOT NULL,
  `bookname` varchar(40) NOT NULL,
  `boorowtime` date NOT NULL,
  `boorowtimelength` double NOT NULL,
  `returntime` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `booksuse_personid_fk` (`persionid`),
  KEY `booksuse_bookbarcode_fk` (`bookbarcode`),
  CONSTRAINT `booksuse_bookbarcode_fk` FOREIGN KEY (`bookbarcode`) REFERENCES `books_tab` (`barcode`),
  CONSTRAINT `booksuse_personid_fk` FOREIGN KEY (`persionid`) REFERENCES `person_tab` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of booksuse_tab
-- ----------------------------

-- ----------------------------
-- Table structure for `company_tab`
-- ----------------------------
DROP TABLE IF EXISTS `company_tab`;
CREATE TABLE `company_tab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `companyname` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of company_tab
-- ----------------------------
INSERT INTO `company_tab` VALUES ('1', '中昱达'), ('2', '新昱');

-- ----------------------------
-- Table structure for `computer_tab`
-- ----------------------------
DROP TABLE IF EXISTS `computer_tab`;
CREATE TABLE `computer_tab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeid` int(11) NOT NULL,
  `barcode` varchar(60) NOT NULL,
  `statusid` int(11) NOT NULL,
  `brands` varchar(20) DEFAULT NULL,
  `model` varchar(40) NOT NULL,
  `cpu` varchar(40) NOT NULL,
  `body` varchar(40) NOT NULL,
  `memory` varchar(40) NOT NULL,
  `disk` varchar(40) NOT NULL,
  `graphics` varchar(40) NOT NULL,
  `dvd` varchar(40) DEFAULT NULL,
  `netcard` varchar(40) DEFAULT NULL,
  `soundcard` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`,`barcode`),
  KEY `computer_typeid_fk` (`typeid`),
  KEY `computer_statusid_fk` (`statusid`),
  KEY `barcode` (`barcode`),
  CONSTRAINT `computer_statusid_fk` FOREIGN KEY (`statusid`) REFERENCES `equipmentstatus_tab` (`id`),
  CONSTRAINT `computer_typeid_fk` FOREIGN KEY (`typeid`) REFERENCES `equipmenttype_tab` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of computer_tab
-- ----------------------------

-- ----------------------------
-- Table structure for `dep_tab`
-- ----------------------------
DROP TABLE IF EXISTS `dep_tab`;
CREATE TABLE `dep_tab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dep` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dep_tab
-- ----------------------------
INSERT INTO `dep_tab` VALUES ('1', '总经办'), ('2', '财务部'), ('3', '行政人事部'), ('4', '测试部'), ('5', '开发部'), ('6', '商务部'), ('7', '研发部'), ('8', '销售部');

-- ----------------------------
-- Table structure for `equipmentstatus_tab`
-- ----------------------------
DROP TABLE IF EXISTS `equipmentstatus_tab`;
CREATE TABLE `equipmentstatus_tab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of equipmentstatus_tab
-- ----------------------------
INSERT INTO `equipmentstatus_tab` VALUES ('1', '正常'), ('2', '损坏'), ('3', '维修中'), ('4', '报废'), ('5', '丢失');

-- ----------------------------
-- Table structure for `equipmenttype_tab`
-- ----------------------------
DROP TABLE IF EXISTS `equipmenttype_tab`;
CREATE TABLE `equipmenttype_tab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of equipmenttype_tab
-- ----------------------------
INSERT INTO `equipmenttype_tab` VALUES ('1', '台式电脑'), ('2', '笔记本电脑'), ('3', '显示器'), ('4', '键盘'), ('5', '鼠标'), ('6', '电源适配器'), ('7', '电池'), ('8', '移动硬盘'), ('9', '光盘'), ('10', '数位板');

-- ----------------------------
-- Table structure for `equipmentuse_history_tab`
-- ----------------------------
DROP TABLE IF EXISTS `equipmentuse_history_tab`;
CREATE TABLE `equipmentuse_history_tab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personid` int(11) NOT NULL,
  `usetypeid` int(11) NOT NULL,
  `equipmenttypeid` int(11) NOT NULL,
  `equipmentbarcode` varchar(60) NOT NULL,
  `boorwtime` date NOT NULL,
  `boorowtimelength` double NOT NULL,
  `returntime` date NOT NULL,
  `shijireturntime` date NOT NULL,
  `jjstatus` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `quipmentuse_history_personid_fk` (`personid`) USING BTREE,
  KEY `quipmentuse_history_usetypeid_fk` (`usetypeid`) USING BTREE,
  KEY `quipmentuse_history_equipmenttypeid_fk` (`equipmenttypeid`) USING BTREE,
  KEY `equipmentuse_history_quipmentbarcode_fk` (`equipmentbarcode`),
  KEY `equipmentuse_history_jjstatusid_fk` (`jjstatus`),
  CONSTRAINT `equipmentuse_history_equipmenttypeid_fk` FOREIGN KEY (`equipmenttypeid`) REFERENCES `equipmenttype_tab` (`id`),
  CONSTRAINT `equipmentuse_history_jjstatusid_fk` FOREIGN KEY (`jjstatus`) REFERENCES `jjstatus_tab` (`id`),
  CONSTRAINT `equipmentuse_history_personid_fk` FOREIGN KEY (`personid`) REFERENCES `person_tab` (`id`),
  CONSTRAINT `equipmentuse_history_usetypeid_fk` FOREIGN KEY (`usetypeid`) REFERENCES `usetype` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of equipmentuse_history_tab
-- ----------------------------

-- ----------------------------
-- Table structure for `equipmentuse_tab`
-- ----------------------------
DROP TABLE IF EXISTS `equipmentuse_tab`;
CREATE TABLE `equipmentuse_tab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personid` int(11) NOT NULL,
  `usetypeid` int(11) NOT NULL,
  `equipmenttypeid` int(11) NOT NULL,
  `equipmentbarcode` varchar(60) NOT NULL,
  `boorwtime` date NOT NULL,
  `boorowtimelength` double NOT NULL,
  `returntime` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `equipmentuse_personid_fk` (`personid`),
  KEY `equipmentuse_usetypeid_fk` (`usetypeid`),
  KEY `equipmentuse_equipmenttypeid_fk` (`equipmenttypeid`),
  CONSTRAINT `equipmentuse_equipmenttypeid_fk` FOREIGN KEY (`equipmenttypeid`) REFERENCES `equipmenttype_tab` (`id`),
  CONSTRAINT `equipmentuse_personid_fk` FOREIGN KEY (`personid`) REFERENCES `person_tab` (`id`),
  CONSTRAINT `equipmentuse_usetypeid_fk` FOREIGN KEY (`usetypeid`) REFERENCES `usetype` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of equipmentuse_tab
-- ----------------------------

-- ----------------------------
-- Table structure for `jjstatus_tab`
-- ----------------------------
DROP TABLE IF EXISTS `jjstatus_tab`;
CREATE TABLE `jjstatus_tab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jjstatus` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jjstatus_tab
-- ----------------------------
INSERT INTO `jjstatus_tab` VALUES ('1', '借用中'), ('2', '按时归还'), ('3', '延迟归还'), ('4', '未归还');

-- ----------------------------
-- Table structure for `mail_tab`
-- ----------------------------
DROP TABLE IF EXISTS `mail_tab`;
CREATE TABLE `mail_tab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personid` int(11) NOT NULL,
  `mailstatusid` int(11) NOT NULL,
  `mail` varchar(30) NOT NULL,
  `cmail` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mail_mailstatusid_fd` (`mailstatusid`),
  KEY `mail_personid_fk` (`personid`),
  CONSTRAINT `mail_mailstatusid_fd` FOREIGN KEY (`mailstatusid`) REFERENCES `mailstatus_tab` (`id`),
  CONSTRAINT `mail_personid_fk` FOREIGN KEY (`personid`) REFERENCES `person_tab` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mail_tab
-- ----------------------------

-- ----------------------------
-- Table structure for `mailstatus_tab`
-- ----------------------------
DROP TABLE IF EXISTS `mailstatus_tab`;
CREATE TABLE `mailstatus_tab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mailstatus_tab
-- ----------------------------
INSERT INTO `mailstatus_tab` VALUES ('1', '未开通'), ('2', '已开通');

-- ----------------------------
-- Table structure for `otherquipment_tab`
-- ----------------------------
DROP TABLE IF EXISTS `otherquipment_tab`;
CREATE TABLE `otherquipment_tab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeid` int(11) NOT NULL,
  `barcode` varchar(60) NOT NULL,
  `statusid` int(11) NOT NULL,
  `brands` varchar(20) DEFAULT NULL,
  `model` varchar(40) NOT NULL,
  `remark` varchar(40) NOT NULL,
  PRIMARY KEY (`id`,`barcode`),
  KEY `otherequipment_typeid_fk` (`typeid`),
  KEY `otherequipment_statusid_fk` (`statusid`),
  KEY `barcode` (`barcode`),
  CONSTRAINT `otherequipment_statusid_fk` FOREIGN KEY (`statusid`) REFERENCES `equipmentstatus_tab` (`id`),
  CONSTRAINT `otherequipment_typeid_fk` FOREIGN KEY (`typeid`) REFERENCES `equipmenttype_tab` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of otherquipment_tab
-- ----------------------------

-- ----------------------------
-- Table structure for `person_tab`
-- ----------------------------
DROP TABLE IF EXISTS `person_tab`;
CREATE TABLE `person_tab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` varchar(80) NOT NULL,
  `username` varchar(10) NOT NULL,
  `password` varchar(16) NOT NULL,
  `sex` varchar(2) NOT NULL,
  `tel` varchar(12) NOT NULL,
  `icq` varchar(10) NOT NULL,
  `brithday` varchar(10) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `card` varchar(19) DEFAULT NULL,
  `companyid` int(11) NOT NULL,
  `postid` int(11) NOT NULL,
  `depid` int(11) NOT NULL,
  `isadmin` varchar(11) NOT NULL,
  `imagepath` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `person_companyid_fks` (`companyid`),
  KEY `person_depid_fks` (`depid`),
  KEY `person_postid_fks` (`postid`),
  CONSTRAINT `person_companyid_fks` FOREIGN KEY (`companyid`) REFERENCES `company_tab` (`id`),
  CONSTRAINT `person_depid_fks` FOREIGN KEY (`depid`) REFERENCES `dep_tab` (`id`),
  CONSTRAINT `person_postid_fks` FOREIGN KEY (`postid`) REFERENCES `post_tab` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of person_tab
-- ----------------------------
INSERT INTO `person_tab` VALUES ('14', '1817a69b-1dea-4842-8592-d31a0b050b4e', '米格', '11111111', '男', '13971863594', '7332255', '0917', '23', '420821199105110011', '1', '11', '3', '普通用户', ''), ('15', '965bf2df-2a19-4817-93f7-a3e8ebd203ca', '郝磊', '11111111', '男', '15815523495', '728064001', '0511', '21', '420821199105110017', '1', '9', '4', '管理员', ''), ('16', 'caa30351-eff2-4786-befa-c17706761434', '梁宁', '11111111', '男', '1234567890', '45646674', '0905', '21', '420821199105110010', '1', '4', '5', '普通用户', ''), ('17', 'dc62ca19-c1d1-4efd-8ab7-163b4c8ec776', '猫猫', '11111111', '女', '15815523545', '99808', '1009', '23', '420821199105110013', '1', '13', '6', '普通用户', ''), ('18', 'e169f3fe-6fcb-44d7-bb83-ce74516c3ca9', '陈真', '11111111', '男', '13971863591', '1111111', '1111', '21', '420821199105110019', '1', '12', '2', '普通用户', '');

-- ----------------------------
-- Table structure for `post_tab`
-- ----------------------------
DROP TABLE IF EXISTS `post_tab`;
CREATE TABLE `post_tab` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of post_tab
-- ----------------------------
INSERT INTO `post_tab` VALUES ('1', '总经理'), ('2', '项目经理'), ('3', '研发工程师'), ('4', '开发工程师'), ('5', '技术总监'), ('6', '开发经理'), ('7', '测试经理'), ('8', '测试工程师'), ('9', '配置管理员'), ('10', '财务总监'), ('11', '前台'), ('12', '人事主管'), ('13', '商务'), ('14', '销售');

-- ----------------------------
-- Table structure for `usetype`
-- ----------------------------
DROP TABLE IF EXISTS `usetype`;
CREATE TABLE `usetype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usetype` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usetype
-- ----------------------------
INSERT INTO `usetype` VALUES ('1', '公司配备'), ('2', '借用');
