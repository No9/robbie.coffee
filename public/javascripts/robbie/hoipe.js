// Generated by CoffeeScript 1.3.3

window.robbie = function() {
  var animation_rate, count, first, s, second, step;
  first = 'NG0EGRWGWWGNWWEWG0SGREGS00NSGWSSRWGWSWNWWSREESGESGEEEREGGEGNNGGEGEEG0NEGEGGEGW0EGNGSEGGWGSWGEWWWNGSRNENG0GSRNSWSS0SGSSW0WWRGNWEGNRGSSS0NGEEGRNGRWGSWGWRNW0RG00WGWNWGREGRWGEWGSEGGNN0SGESGWGERSG0ES0SGSWSSRSWS0RSG0SGER0SGRNGEEESRRGERESG0SNEEWSN0G';
  second = 'WGSEG0NGEWGREWWWGWSGEEG0SESSG0EGRSG0WWSRWGSGRSGSEGSE0NEGSEGWNGNWGGNWNSWEEGREGNG0WNGNNGRNGWNWN0N0WG0NGRRNWS0NNNRSN0NNRNWNWW0NG0NN0NNRERGNGWEGNNNGEG0SRR0EERNREGERSRSGEEGRWGEWWSRWGWWWEGEEGRRSNSGSEG0SGESWGNWWNW0EGREG0NSNSNN0EGSNESNSSESWNN0RGRW0NS';
  s = new Simulation(second);
  s.display_canvas('board');
  animation_rate = 100;
  count = 0;
  step = function() {
    s.step();
    s.display_canvas('board');
    count++;
    if (count === 200) {
      s.reset();
      count = 0;
    }
    return setTimeout(step, animation_rate);
  };
  return step();
};