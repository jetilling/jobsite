INSERT INTO jobs (title, users_id, description, key_words, date_posted, starting_bid, hours)
VALUES ($2, $1, $3, $5, CURRENT_TIMESTAMP, $4, $6)
