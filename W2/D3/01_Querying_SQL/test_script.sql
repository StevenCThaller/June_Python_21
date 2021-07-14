SELECT characters.character_name AS 'name', characters.alter_ego AS 'alter ego', leagues.league_name AS 'league name', alignments.alignment, powers.power_name AS 'power'
FROM characters
JOIN leagues ON characters.league_id = leagues.league_id
JOIN alignments ON characters.alignment_id = alignments.alignment_id
JOIN character_has_powers ON characters.character_id = character_has_powers.character_id
JOIN powers ON character_has_powers.power_id = powers.power_id;