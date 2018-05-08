-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema teaming
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema teaming
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `teaming` DEFAULT CHARACTER SET utf8 ;
USE `teaming` ;

-- -----------------------------------------------------
-- Table `teaming`.`study`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`study` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `director_id` VARCHAR(15) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `reg_date` DATETIME NOT NULL,
  `update_date` DATETIME NULL DEFAULT NULL,
  `start_date` DATETIME NOT NULL,
  `duration` INT(11) NOT NULL,
  `region` VARCHAR(25) NOT NULL,
  `category` INT(11) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `limit` INT(11) NOT NULL,
  `status` INT(11) NULL DEFAULT NULL,
  `number` INT(11) NULL DEFAULT NULL,
  `thumbnail` VARCHAR(25) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`schedule`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`schedule` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `schedule_time` DATETIME NOT NULL,
  `content` VARCHAR(100) NOT NULL,
  `study_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_schedule_study1_idx` (`study_id` ASC),
  CONSTRAINT `fk_schedule_study1`
    FOREIGN KEY (`study_id`)
    REFERENCES `teaming`.`study` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`attendance`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`attendance` (
  `schedule_id` INT(11) NOT NULL,
  `member_id` VARCHAR(15) NOT NULL,
  `attendance_type` INT(11) NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  INDEX `fk_attendance_schedule1_idx` (`schedule_id` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_attendance_schedule1`
    FOREIGN KEY (`schedule_id`)
    REFERENCES `teaming`.`schedule` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`attendance_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`attendance_type` (
  `present` INT(11) NOT NULL,
  `absent` INT(11) NOT NULL,
  `sick` INT(11) NOT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`auth`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`auth` (
  `mentor` INT(11) NOT NULL,
  `normal` INT(11) NOT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`user` (
  `id` VARCHAR(15) NOT NULL,
  `password` VARCHAR(25) NULL DEFAULT NULL,
  `auth` INT(11) NOT NULL,
  `name` VARCHAR(10) NULL DEFAULT NULL,
  `age` INT(11) NULL DEFAULT NULL,
  `region` VARCHAR(25) NULL DEFAULT NULL,
  `introduction` VARCHAR(100) NULL DEFAULT NULL,
  `email` VARCHAR(25) NULL DEFAULT NULL,
  `phone` INT(11) NULL DEFAULT NULL,
  `social_id` VARCHAR(15) NULL DEFAULT NULL,
  `profile_img` VARCHAR(45) NULL DEFAULT NULL,
  `thumbnail` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`balck_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`balck_user` (
  `black_id` VARCHAR(15) NOT NULL,
  `user_id` VARCHAR(15) NOT NULL,
  INDEX `fk_balck_user_user1_idx` (`user_id` ASC),
  PRIMARY KEY (`user_id`),
  CONSTRAINT `fk_balck_user_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `teaming`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`candidate`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`candidate` (
  `candidate_id` VARCHAR(15) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `study_id` INT(11) NOT NULL,
  INDEX `fk_candidate_study1_idx` (`study_id` ASC),
  PRIMARY KEY (`candidate_id`),
  CONSTRAINT `fk_candidate_study1`
    FOREIGN KEY (`study_id`)
    REFERENCES `teaming`.`study` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`candidate_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`candidate_status` (
  `registerer` INT(11) NOT NULL,
  `invited` INT(11) NOT NULL,
  `participating` INT(11) NOT NULL,
  `reject` INT(11) NOT NULL,
  `normal` INT(11) NOT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`career`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`career` (
  `degree` VARCHAR(15) NULL DEFAULT NULL,
  `major` VARCHAR(15) NULL DEFAULT NULL,
  `job` VARCHAR(15) NULL DEFAULT NULL,
  `user_id` VARCHAR(15) NOT NULL,
  INDEX `fk_career_user1_idx` (`user_id` ASC),
  PRIMARY KEY (`user_id`),
  CONSTRAINT `fk_career_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `teaming`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`category` (
  `business` INT(11) NOT NULL,
  `planning` INT(11) NOT NULL,
  `marketing` INT(11) NOT NULL,
  `r_d` INT(11) NOT NULL,
  `public_company` INT(11) NOT NULL,
  `language` INT(11) NOT NULL,
  `certificate` INT(11) NOT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`exposure`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`exposure` (
  `age` INT(11) NOT NULL,
  `region` INT(11) NOT NULL,
  `introduction` INT(11) NOT NULL,
  `career` INT(11) NOT NULL,
  `interest` INT(11) NOT NULL,
  `email` INT(11) NOT NULL,
  `phone` INT(11) NOT NULL,
  `social_id` INT(11) NOT NULL,
  `profile_img` INT(11) NOT NULL,
  `thumbnail` INT(11) NOT NULL,
  `user_id` VARCHAR(15) NOT NULL,
  INDEX `fk_exposure_user1_idx` (`user_id` ASC),
  PRIMARY KEY (`user_id`),
  CONSTRAINT `fk_exposure_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `teaming`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`favorite_study`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`favorite_study` (
  `study_id` INT(11) NOT NULL,
  `favorite_study` VARCHAR(45) NOT NULL,
  `user_id` VARCHAR(15) NOT NULL,
  INDEX `fk_favorite_study_user1_idx` (`user_id` ASC),
  PRIMARY KEY (`user_id`),
  CONSTRAINT `fk_favorite_study_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `teaming`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`interest`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`interest` (
  `business` INT(11) NOT NULL,
  `planning` INT(11) NOT NULL,
  `marketing` INT(11) NOT NULL,
  `r_d` INT(11) NOT NULL,
  `public_company` INT(11) NOT NULL,
  `language` INT(11) NOT NULL,
  `certificate` INT(11) NOT NULL,
  `user_id` VARCHAR(15) NOT NULL,
  INDEX `fk_interest_user1_idx` (`user_id` ASC),
  PRIMARY KEY (`user_id`),
  CONSTRAINT `fk_interest_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `teaming`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`member` (
  `member_id` VARCHAR(15) NOT NULL,
  `study_id` INT(11) NOT NULL,
  INDEX `fk_member_study1_idx` (`study_id` ASC),
  CONSTRAINT `fk_member_study1`
    FOREIGN KEY (`study_id`)
    REFERENCES `teaming`.`study` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`my_study`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`my_study` (
  `study_id` INT(11) NOT NULL,
  `status` INT(11) NOT NULL,
  `auth` VARCHAR(45) NOT NULL,
  `user_id` VARCHAR(15) NOT NULL,
  INDEX `fk_my_study_user1_idx` (`user_id` ASC),
  PRIMARY KEY (`user_id`),
  CONSTRAINT `fk_my_study_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `teaming`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`notice`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`notice` (
  `notice` VARCHAR(100) NOT NULL,
  `reg_date` DATETIME NOT NULL,
  `update_date` DATETIME NULL DEFAULT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `study_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_notice_study1_idx` (`study_id` ASC),
  CONSTRAINT `fk_notice_study1`
    FOREIGN KEY (`study_id`)
    REFERENCES `teaming`.`study` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`region`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`region` (
  `seoul` INT(11) NOT NULL,
  `busan` INT(11) NOT NULL,
  `daegu` INT(11) NOT NULL,
  `incheon` INT(11) NOT NULL,
  `gwangju` INT(11) NOT NULL,
  `daejeon` INT(11) NOT NULL,
  `ulsan` INT(11) NOT NULL,
  `sejong` INT(11) NOT NULL,
  `gyeonggi` INT(11) NOT NULL,
  `gangwon` INT(11) NOT NULL,
  `choongbuk` INT(11) NOT NULL,
  `choongnam` INT(11) NOT NULL,
  `jeonbuk` INT(11) NOT NULL,
  `jeonnam` INT(11) NOT NULL,
  `gyeongbuk` INT(11) NOT NULL,
  `gyeongnam` INT(11) NOT NULL,
  `jeju` INT(11) NOT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`review` (
  `review_id` VARCHAR(15) NOT NULL,
  `study_id` INT(11) NOT NULL,
  `rating` DOUBLE NULL DEFAULT NULL,
  `comment` VARCHAR(100) NULL DEFAULT NULL,
  `user_id` VARCHAR(15) NOT NULL,
  INDEX `fk_review_user1_idx` (`user_id` ASC),
  PRIMARY KEY (`user_id`),
  CONSTRAINT `fk_review_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `teaming`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`study_photo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`study_photo` (
  `photo` VARCHAR(45) NOT NULL,
  `study_id` INT(11) NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  INDEX `fk_study_photo_study1_idx` (`study_id` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_study_photo_study1`
    FOREIGN KEY (`study_id`)
    REFERENCES `teaming`.`study` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`study_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`study_status` (
  `arranged_invite` INT(11) NOT NULL,
  `arranged_register` INT(11) NOT NULL,
  `arranged_participate` INT(11) NOT NULL,
  `rejected` INT(11) NOT NULL,
  `updated` INT(11) NOT NULL,
  `deleted` INT(11) NOT NULL,
  `ongoing` INT(11) NOT NULL,
  `completed` INT(11) NOT NULL,
  `arranged` VARCHAR(45) NOT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `teaming`.`study_time`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teaming`.`study_time` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `study_id` INT(11) NOT NULL,
  `study_day` VARCHAR(10) NOT NULL,
  `study_time` VARCHAR(15) NOT NULL,
  `study_id1` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_study_time_study1_idx` (`study_id1` ASC),
  CONSTRAINT `fk_study_time_study1`
    FOREIGN KEY (`study_id1`)
    REFERENCES `teaming`.`study` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
