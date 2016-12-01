SELECT id, first_name, last_name, username, city, state, zipcode, street_address
FROM users
WHERE id = $1;
