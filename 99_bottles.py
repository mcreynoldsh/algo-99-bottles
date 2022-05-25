def bottle_song(orig_num,num_bottles):
	next_bottle= num_bottles-1
	body_str= f"""	{num_bottles} bottles of beer on the wall, {num_bottles} bottles of beer.
	Take one down and pass it around, {next_bottle} bottles of beer on the wall."""
	end_str = f"""	2 bottles of beer on the wall, 2 bottles of beer. 
	Take one down and pass it around, 1 bottle of beer on the wall.
	1 bottle of beer on the wall, 1 bottle of beer.
	Take one down and pass it around, no more bottles of beer on the wall.
	No more bottles of beer on the wall, no more bottles of beer.
	Go to the store and buy some more, {orig_num} bottles of beer on the wall."""
	only_one_str = """1 bottle of beer on the wall, 1 bottle of beer.
	Take one down and pass it around, no more bottles of beer on the wall.
	No more bottles of beer on the wall, no more bottles of beer.
	Go to the store and buy some more, 1 bottle of beer on the wall."""
	if num_bottles == 2:
		return print(end_str)
	elif num_bottles == 1:
		return print(only_one_str)
	else:
		print(body_str)
		return bottle_song(orig_num,next_bottle)	

	

bottle_song()
