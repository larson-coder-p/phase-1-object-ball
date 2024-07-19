function bigShoeRebounds(players) {
  if (players.length === 0) return null;

  let maxShoeSize = -Infinity;
  let reboundsOfMaxShoePlayer = 0;

  for (let player of players) {
      console.log(`Checking player: ${player.name}, shoeSize: ${player.shoeSize}, rebounds: ${player.rebounds}`);
      if (player.shoeSize > maxShoeSize) {
          maxShoeSize = player.shoeSize;
          reboundsOfMaxShoePlayer = player.rebounds;
          console.log(`New max shoe size found: ${maxShoeSize}, rebounds: ${reboundsOfMaxShoePlayer}`);
      }
  }

  console.log(`Player with largest shoe size has: ${reboundsOfMaxShoePlayer} rebounds`);
  return reboundsOfMaxShoePlayer;
}
