window.robbie = ->
  test = 'NG0EGRWGWWGNWWEWG0SGREGS00NSGWSSRWGWSWNWWSREESGESGEEEREGGEGNNGGEGEEG0NEGEGGEGW0EGNGSEGGWGSWGEWWWNGSRNENG0GSRNSWSS0SGSSW0WWRGNWEGNRGSSS0NGEEGRNGRWGSWGWRNW0RG00WGWNWGREGRWGEWGSEGGNN0SGESGWGERSG0ES0SGSWSSRSWS0RSG0SGER0SGRNGEEESRRGERESG0SNEEWSN0G'
  s = new Simulation(test)
  s.display_canvas('board')
  animation_rate = 100
  count = 0
  step = ->
    s.step()
    s.display_canvas('board')
    count++
    if count == 200
      s.reset()
      count = 0
    setTimeout step,animation_rate
  step()
