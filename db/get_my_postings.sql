SELECT id, title, description, key_words, date_posted, starting_bid, hours
FROM jobs
WHERE users_id = $1
