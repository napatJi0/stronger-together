-- =====================================================
-- 1. ตารางเก็บข้อมูล SUP
-- =====================================================
CREATE TABLE IF NOT EXISTS stronger_together_sup_profile (
    sup_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    sup_name VARCHAR(255) NOT NULL,
    sup_group VARCHAR(50) NOT NULL,
    sup_profile_image VARCHAR(500) NULL,
    remark TEXT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (sup_id)
) ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;


-- =====================================================
-- 2. ตารางเก็บข้อมูลทีม
-- =====================================================
CREATE TABLE IF NOT EXISTS stronger_together_team_profile (
    team_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    team_name VARCHAR(255) NOT NULL,
    team_profile_image VARCHAR(500) NULL,
    remark TEXT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (team_id),
    UNIQUE KEY uq_team_name (team_name)
) ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;


-- =====================================================
-- 3. ตารางเชื่อมสมาชิก SUP กับทีม
-- =====================================================
CREATE TABLE IF NOT EXISTS stronger_together_team_member (
    team_member_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    team_id BIGINT UNSIGNED NOT NULL,
    sup_id BIGINT UNSIGNED NOT NULL,
    is_team_leader TINYINT(1) NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (team_member_id),

    UNIQUE KEY uq_team_member (team_id, sup_id),

    KEY idx_team_member_team_id (team_id),
    KEY idx_team_member_sup_id (sup_id),

    CONSTRAINT fk_team_member_team
        FOREIGN KEY (team_id)
        REFERENCES stronger_together_team_profile (team_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    CONSTRAINT fk_team_member_sup
        FOREIGN KEY (sup_id)
        REFERENCES stronger_together_sup_profile (sup_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
) ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;


-- =====================================================
-- 4. ตารางเก็บข้อมูลเกม
-- =====================================================
CREATE TABLE IF NOT EXISTS stronger_together_games (
    game_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    game_name VARCHAR(255) NOT NULL,
    game_description TEXT NULL,
    max_score DECIMAL(10,2) NULL,
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (game_id),
    UNIQUE KEY uq_game_name (game_name)
) ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;


-- =====================================================
-- 5. ตารางเก็บคะแนนแต่ละเกมของแต่ละทีม
-- =====================================================
CREATE TABLE IF NOT EXISTS stronger_together_game_score (
    score_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    game_id BIGINT UNSIGNED NOT NULL,
    team_id BIGINT UNSIGNED NOT NULL,
    score DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    rank_in_game INT UNSIGNED NULL,
    remark TEXT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (score_id),

    UNIQUE KEY uq_game_team_score (game_id, team_id),

    KEY idx_game_score_game_id (game_id),
    KEY idx_game_score_team_id (team_id),

    CONSTRAINT fk_game_score_game
        FOREIGN KEY (game_id)
        REFERENCES stronger_together_games (game_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    CONSTRAINT fk_game_score_team
        FOREIGN KEY (team_id)
        REFERENCES stronger_together_team_profile (team_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
) ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

-- =====================================================
-- 6. ตารางเก็บรูป Profile Cover
-- =====================================================
CREATE TABLE IF NOT EXISTS stronger_together_profile_cover (
    profile_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    profile_group VARCHAR(50) NOT NULL,
    profile_image VARCHAR(500) NOT NULL,

    PRIMARY KEY (profile_id),
    UNIQUE KEY uq_profile_cover_group (profile_group)
) ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;