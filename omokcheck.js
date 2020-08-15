// omokcheck.js ���� Ver.0.554 (2020.08.15.)

// �� �ڸ� : 0,  ���� �� : 1,  �� �� : -1


// wincheckw �Լ� - ������ �ٵϵ��� 5�� �������� Ȯ��
function wincheckw() {
  var dol_continue_w;
  var dol_continue_wtext;
  var i, j;
  var owhere;
  var owherex;
  var owherey;
  winner = "";
  dol_continue_wtext = "";

  // Win Check _ ������
    dol_continue_w = 1;

    owhere = omokjxywhere;
    j = 1;
    while(j<=5){
      owhere = owhere - 19;
      if( owhere > 0 && dol_continue == 1 && omokj[owhere] == 1 ){
        dol_continue_w++;
        j++;
      } else { break; }
    }
    owhere = omokjxywhere;
    j = 1;
    while(j<=5){
      owhere = owhere + 19;
      if( owhere < 362 && dol_continue == 1 && omokj[owhere] == 1 ){
        dol_continue_w++;
        j++;
      } else { break; }
    }

    if (dol_continue_w == 5){
      document.getElementById("testresult").value = "Black Win";
      winner = "White";
    }

    // Win Check _ ������
      dol_continue_w = 1;
      owhere = omokjxywhere % 19;
      if(owhere == 0 ){ owhere = 19; }
      j = 1;
      while(j<=5){
        owhere = owhere - 1;
        if( owhere >= 1 && dol_continue == 1 && omokj[omokjxywhere-j] == 1 ){
          dol_continue_w++;
          j++;
        } else { break; }
      }
      owhere = omokjxywhere % 19;
      if(owhere == 0 ){ owhere = 19; }
      j = 1;
      while(j<=5){
        owhere = owhere + 1;
        if( owhere <= 19 && dol_continue == 1 && omokj[omokjxywhere+j] == 1 ){
          dol_continue_w++;
          j++;
        } else { break; }
      }

      if (dol_continue_w == 5){
        document.getElementById("testresult").value = "Black Win";
        winner = "White";
      }

      // Win Check _ �»��밢��
        dol_continue_w = 1;
        owherex = parseInt(omokjxywhere / 19) + 1;
        owherey = omokjxywhere % 19;
        if(owherey == 0 ){ owherey = 19; }
        j = 1;
        while(j<=5){
          owherex = owherex - 1;
          owherey = owherey - 1;
          if( owherex >= 1 && owherey >= 1 && dol_continue == 1 && omokj[omokjxywhere-(19*j)-j] == 1 ){
            dol_continue_w++;
            j++;
          } else { break; }
        }
        owherex = parseInt(omokjxywhere / 19) + 1;
        owherey = omokjxywhere % 19;
        if(owherey == 0 ){ owherey = 19; }
        j = 1;
        while(j<=5){
          owherex = owherex + 1;
          owherey = owherey + 1;
          if( owherex <= 19 && owherey <=19 && dol_continue == 1 && omokj[omokjxywhere+(19*j)+j] == 1 ){
            dol_continue_w++;
            j++;
          } else { break; }
        }

        if (dol_continue_w == 5){
          document.getElementById("testresult").value = "Black Win";
          winner = "White";
        }

        // Win Check _ �����밢��
          dol_continue_w = 1;
          owherex = parseInt(omokjxywhere / 19) + 1;
          owherey = omokjxywhere % 19;
          if(owherey == 0 ){ owherey = 19; }
          j = 1;
          while(j<=5){
            owherex = owherex - 1;
            owherey = owherey + 1;
            if( owherex >= 1 && owherey <= 19 && dol_continue == 1 && omokj[omokjxywhere-(18*j)] == 1 ){
              dol_continue_w++;
              j++;
            } else { break; }
          }
          owherex = parseInt(omokjxywhere / 19) + 1;
          owherey = omokjxywhere % 19;
          if(owherey == 0 ){ owherey = 19; }
          j = 1;
          while(j<=5){
            owherex = owherex + 1;
            owherey = owherey - 1;
            if( owherex <= 19 && owherey >=1 && dol_continue == 1 && omokj[omokjxywhere+(18*j)] == 1 ){
              dol_continue_w++;
              j++;
            } else { break; }
          }

          if (dol_continue_w == 5){
            document.getElementById("testresult").value = "Black Win";
            winner = "White";
          }

} // wincheckw �Լ� ��



// wincheckb �Լ� - ���� �ٵϵ��� 5�� �������� Ȯ��
function wincheckb() {
  var dol_continue_b;
  var dol_continue_btext;
  var i, j;
  var owhere;
  var owherex;
  var owherey;
  winner = "";
  dol_continue_btext = "";

  // Win Check _ ������
    dol_continue_b = 1;
    owhere = omokjxywhere;
    j = 1;
    while(j<=5){
      owhere = owhere - 19;
      if( owhere > 0 && dol_continue == -1 && omokj[owhere] == -1 ) {
        dol_continue_b++;
        j++;
      } else { break; }
    }
    owhere = omokjxywhere;
    j = 1;
    while(j<=5){
      owhere = owhere + 19;
      if( owhere < 362 && dol_continue == -1 && omokj[owhere] == -1 ) {
        dol_continue_b++;
        j++;
      } else { break; }
    }

    if (dol_continue_b == 5){
      document.getElementById("testresult").value = "White Win";
      winner = "Black";
    }


    // Win Check _ ������
      dol_continue_b = 1;
      owhere = omokjxywhere % 19;
      if(owhere == 0 ){ owhere = 19; }
      j = 1;
      while(j<=5){
        owhere = owhere - 1;
        if( owhere >= 1 && dol_continue == -1 && omokj[omokjxywhere-j] == -1 ) {
          dol_continue_b++;
          j++;
        } else { break; }
      }
      owhere = omokjxywhere % 19;
      if(owhere == 0 ){ owhere = 19; }
      j = 1;
      while(j<=5){
        owhere = owhere + 1;
        if( owhere <= 19 && dol_continue == -1 && omokj[omokjxywhere+j] == -1 ) {
          dol_continue_b++;
          j++;
        } else { break; }
      }

      if (dol_continue_b == 5){
        document.getElementById("testresult").value = "White Win";
        winner = "Black";
      }


      // Win Check _ �»��밢��
        dol_continue_b = 1;
        owherex = parseInt(omokjxywhere / 19) + 1;
        owherey = omokjxywhere % 19;
        if(owherey == 0 ){ owherey = 19; }
        j = 1;
        while(j<=5){
          owherex = owherex - 1;
          owherey = owherey - 1;
          if( owherex >= 1 && owherey >= 1 && dol_continue == -1 && omokj[omokjxywhere-(19*j)-j] == -1 ) {
            dol_continue_b++;
            j++;
          } else { break; }
        }
        owherex = parseInt(omokjxywhere / 19) + 1;
        owherey = omokjxywhere % 19;
        if(owherey == 0 ){ owherey = 19; }
        j = 1;
        while(j<=5){
          owherex = owherex + 1;
          owherey = owherey + 1;
          if( owherex <= 19 && owherey <=19 && dol_continue == -1 && omokj[omokjxywhere+(19*j)+j] == -1 ) {
            dol_continue_b++;
            j++;
          } else { break; }
        }

        if (dol_continue_b == 5){
          document.getElementById("testresult").value = "White Win";
          winner = "Black";
        }


        // Win Check _ �����밢��
          dol_continue_b = 1;
          owherex = parseInt(omokjxywhere / 19) + 1;
          owherey = omokjxywhere % 19;
          if(owherey == 0 ){ owherey = 19; }
          j = 1;
          while(j<=5){
            owherex = owherex - 1;
            owherey = owherey + 1;
            if( owherex >= 1 && owherey <= 19 && dol_continue == -1 && omokj[omokjxywhere-(18*j)] == -1 ) {
              dol_continue_b++;
              j++;
            } else { break; }
          }
          owherex = parseInt(omokjxywhere / 19) + 1;
          owherey = omokjxywhere % 19;
          if(owherey == 0 ){ owherey = 19; }
          j = 1;
          while(j<=5){
            owherex = owherex + 1;
            owherey = owherey - 1;
            if( owherex <= 19 && owherey >=1 && dol_continue == -1 && omokj[omokjxywhere+(18*j)] == -1 ) {
              dol_continue_b++;
              j++;
            } else { break; }
          }

          if (dol_continue_b == 5){
            document.getElementById("testresult").value = "White Win";
            winner = "Black";
          }


} // wincheckb �Լ� ��




// 3*3 üũ �Լ� - ������ �ٵϵ��� ������ 3*3�� �Ǵ��� Ȯ��
function check_33() {
  var dol_continue_w;
  var i, j;
  var owhere;
  var owherex;
  var owherey;
  var dol_33check = [1,1,1,1,1,1,1,1];
  var dol_33end = [0,0,0,0,0,0,0,0];
  var dol_33opp = [4, 5, 6, 7, 0, 1, 2, 3];

  dol33 = 0;

    owhere = omokjxywhere;
    i = 1;
    while(i<=4){
      owhere = owhere - 19;
      owherex = parseInt(owhere / 19) + 1;
      owherey = owhere % 19;
      if(owherey == 0 ){ owherey = 19; }
      if( owherex >= 1 && omokj[owhere] == 1 ){
        dol_33check[0]++;
        i++;
      } else { if(omokj[owhere] == -1) { dol_33end[0] = -10; } break; }
    }

    owhere = omokjxywhere;
    i = 1;
    while(i<=4){
      owhere = owhere - 18;
      owherex = parseInt(owhere / 19) + 1;
      owherey = owhere % 19;
      if(owherey == 0 ){ owherey = 19; }
      if( owherex >= 1 && owherey <= 19 && omokj[owhere] == 1 ){
        dol_33check[1]++;
        i++;
      } else { if(omokj[owhere] == -1) { dol_33end[1] = -10; } break; }
    }

    owhere = omokjxywhere;
    i = 1;
    while(i<=4){
      owhere = owhere + 1;
      owherex = parseInt(owhere / 19) + 1;
      owherey = owhere % 19;
      if(owherey == 0 ){ owherey = 19; }
      if( owherey <= 19 && omokj[owhere] == 1 ){
        dol_33check[2]++;
        i++;
      } else { if(omokj[owhere] == -1) { dol_33end[2] = -10; } break; }
    }

    owhere = omokjxywhere;
    i = 1;
    while(i<=4){
      owhere = owhere + 20;
      owherex = parseInt(owhere / 19) + 1;
      owherey = owhere % 19;
      if(owherey == 0 ){ owherey = 19; }
      if( owherex <= 19 && owherey <= 19 && omokj[owhere] == 1 ){
        dol_33check[3]++;
        i++;
      } else { if(omokj[owhere] == -1) { dol_33end[3] = -10; } break; }
    }

    owhere = omokjxywhere;
    i = 1;
    while(i<=4){
      owhere = owhere + 19;
      owherex = parseInt(owhere / 19) + 1;
      owherey = owhere % 19;
      if(owherey == 0 ){ owherey = 19; }
      if( owherex <= 19 && omokj[owhere] == 1 ){
        dol_33check[4]++;
        i++;
      } else { if(omokj[owhere] == -1) { dol_33end[4] = -10; } break; }
    }

    owhere = omokjxywhere;
    i = 1;
    while(i<=4){
      owhere = owhere + 18;
      owherex = parseInt(owhere / 19) + 1;
      owherey = owhere % 19;
      if(owherey == 0 ){ owherey = 19; }
      if( owherex <= 19 && owherey >= 1 && omokj[owhere] == 1 ){
        dol_33check[5]++;
        i++;
      } else { if(omokj[owhere] == -1) { dol_33end[5] = -10; } break; }
    }

    owhere = omokjxywhere;
    i = 1;
    while(i<=4){
      owhere = owhere - 1;
      owherex = parseInt(owhere / 19) + 1;
      owherey = owhere % 19;
      if(owherey == 0 ){ owherey = 19; }
      if( owherey >= 1 && omokj[owhere] == 1 ){
        dol_33check[6]++;
        i++;
      } else { if(omokj[owhere] == -1) { dol_33end[6] = -10; } break; }
    }

    owhere = omokjxywhere;
    i = 1;
    while(i<=4){
      owhere = owhere - 20;
      owherex = parseInt(owhere / 19) + 1;
      owherey = owhere % 19;
      if(owherey == 0 ){ owherey = 19; }
      if( owherex >= 1 && owherey >= 1 && omokj[owhere] == 1 ){
        dol_33check[7]++;
        i++;
      } else { if(omokj[owhere] == -1) { dol_33end[7] = -10; } break; }
    }



    j = 0;
    for (var kk=0; kk<7; kk++){
      for (var mm=kk+1; mm<8; mm++){
        if  (dol_33check[kk] == 3 && dol_33end[kk] != -10 && dol_33check[dol_33opp[kk]] == 1 && dol_33end[dol_33opp[kk]] != -10
          && dol_33check[mm] ==3 && dol_33end[mm] != -10 && dol_33check[dol_33opp[mm]] == 1 && dol_33end[dol_33opp[mm]] != -10) { j++; }
      }
    }
        if ( dol_33check[4] == 2 && dol_33check[0] == 2 && dol_33end[4] != -10 && dol_33end[0] != -10
          && dol_33check[6] + dol_33check[2] == 4 && dol_33end[6] != -10 && dol_33end[2] != -10) { j++; }
        if ( dol_33check[4] == 2 && dol_33check[0] == 2 && dol_33end[4] != -10 && dol_33end[0] != -10
          && dol_33check[7] + dol_33check[3] == 4 && dol_33end[7] != -10 && dol_33end[3] != -10) { j++; }
        if ( dol_33check[4] == 2 && dol_33check[0] == 2 && dol_33end[4] != -10 && dol_33end[0] != -10
          && dol_33check[5] + dol_33check[1] == 4 && dol_33end[5] != -10 && dol_33end[1] != -10) { j++; }

        if ( dol_33check[6] == 2 && dol_33check[2] == 2 && dol_33end[6] != -10 && dol_33end[2] != -10
          && dol_33check[7] + dol_33check[3] == 4 && dol_33end[7] != -10 && dol_33end[3] != -10) { j++; }
        if ( dol_33check[6] == 2 && dol_33check[2] == 2 && dol_33end[6] != -10 && dol_33end[2] != -10
          && dol_33check[5] + dol_33check[1] == 4 && dol_33end[5] != -10 && dol_33end[1] != -10) { j++; }
        if ( dol_33check[6] == 2 && dol_33check[2] == 2 && dol_33end[6] != -10 && dol_33end[2] != -10
          && dol_33check[4] == 1 && dol_33check[0] == 3 && dol_33end[4] != -10 && dol_33end[0] != -10) { j++; }
        if ( dol_33check[6] == 2 && dol_33check[2] == 2 && dol_33end[6] != -10 && dol_33end[2] != -10
          && dol_33check[4] == 3 && dol_33check[0] == 1 && dol_33end[4] != -10 && dol_33end[0] != -10) { j++; }

        if ( dol_33check[5] == 2 && dol_33check[1] == 2 && dol_33end[5] != -10 && dol_33end[1] != -10
          && dol_33check[4] == 1 && dol_33check[0] == 3 && dol_33end[4] != -10 && dol_33end[0] != -10) { j++; }
        if ( dol_33check[5] == 2 && dol_33check[1] == 2 && dol_33end[5] != -10 && dol_33end[1] != -10
          && dol_33check[4] == 3 && dol_33check[0] == 1 && dol_33end[4] != -10 && dol_33end[0] != -10) { j++; }
        if ( dol_33check[5] == 2 && dol_33check[1] == 2 && dol_33end[5] != -10 && dol_33end[1] != -10
          && dol_33check[7] + dol_33check[3] == 4 && dol_33end[7] != -10 && dol_33end[3] != -10) { j++; }
        if ( dol_33check[5] == 2 && dol_33check[1] == 2 && dol_33end[5] != -10 && dol_33end[1] != -10
          && dol_33check[6] == 1 && dol_33check[2] == 3 && dol_33end[6] != -10 && dol_33end[2] != -10) { j++; }
        if ( dol_33check[5] == 2 && dol_33check[1] == 2 && dol_33end[5] != -10 && dol_33end[1] != -10
          && dol_33check[6] == 3 && dol_33check[2] == 1 && dol_33end[6] != -10 && dol_33end[2] != -10) { j++; }

        if ( dol_33check[7] == 2 && dol_33check[3] == 2 && dol_33end[7] != -10 && dol_33end[3] != -10
          && dol_33check[4] == 1 && dol_33check[0] == 3 && dol_33end[4] != -10 && dol_33end[0] != -10) { j++; }
        if ( dol_33check[7] == 2 && dol_33check[3] == 2 && dol_33end[7] != -10 && dol_33end[3] != -10
          && dol_33check[4] == 3 && dol_33check[0] == 1 && dol_33end[4] != -10 && dol_33end[0] != -10) { j++; }
        if ( dol_33check[7] == 2 && dol_33check[3] == 2 && dol_33end[7] != -10 && dol_33end[3] != -10
          && dol_33check[5] == 1 && dol_33check[1] == 3 && dol_33end[5] != -10 && dol_33end[1] != -10) { j++; }
        if ( dol_33check[7] == 2 && dol_33check[3] == 2 && dol_33end[7] != -10 && dol_33end[3] != -10
          && dol_33check[5] == 3 && dol_33check[1] == 1 && dol_33end[5] != -10 && dol_33end[1] != -10) { j++; }
        if ( dol_33check[7] == 2 && dol_33check[3] == 2 && dol_33end[7] != -10 && dol_33end[3] != -10
          && dol_33check[6] == 1 && dol_33check[2] == 3 && dol_33end[6] != -10 && dol_33end[2] != -10) { j++; }
        if ( dol_33check[7] == 2 && dol_33check[3] == 2 && dol_33end[7] != -10 && dol_33end[3] != -10
          && dol_33check[6] == 3 && dol_33check[2] == 1 && dol_33end[6] != -10 && dol_33end[2] != -10) { j++; }


    if(j>0) { dol33 = 100; }

} // 33üũ �Լ� ��




// check_4 �Լ� - ������ [0]****[ ]
function check_4() {
  var dol_continue_w;
  var dol_continue_wtext;
  var i, j;
  var owhere;
  var owherex;
  var owherey;
  var oend1, oend2;
  dol_continue_wtext = "";


  // Check_4 _ ������
    dol_continue_w = 1;
    dol_white_continue4 = 1;
    owhere = omokjxywhere;
    i = 1;
    while(i<=5){
      owhere = owhere - 19;
      if( owhere > 0 && dol_continue == 1 && omokj[owhere] == 1 ){
        dol_continue_w++;
        i++;
      } else { break; }
    }
    oend1 = i;
    owhere = omokjxywhere;
    j = 1;
    while(j<=5){
      owhere = owhere + 19;
      if( owhere < 362 && dol_continue == 1 && omokj[owhere] == 1 ){
        dol_continue_w++;
        j++;
      } else { break; }
    }
    oend2 = j;

    if (dol_continue_w == 4){
      owhere = omokjxywhere;
      if(omokj[owhere-19*oend1] == 0 ){
        dol_next_bwhere_w4 = owhere-19*oend1;
      }
      if(omokj[owhere+19*oend2] == 0){
        dol_next_bwhere_w4 = owhere+19*oend2;
      }
      dol_white_continue4 = 4;
    }


// Check_4 _ ������
  dol_continue_w = 1;
  owhere = omokjxywhere % 19;
  if(owhere == 0 ){ owhere = 19; }
  i = 1;
  while(i<=5){
    owhere = owhere - 1;
    if( owhere >= 1 && dol_continue == 1 && omokj[omokjxywhere-i] == 1 ){
      dol_continue_w++;
      i++;
    } else { break; }
  }
  oend1 = i;
  owhere = omokjxywhere % 19;
  if(owhere == 0 ){ owhere = 19; }
  j = 1;
  while(j<=5){
    owhere = owhere + 1;
    if( owhere <= 19 && dol_continue == 1 && omokj[omokjxywhere+j] == 1 ){
      dol_continue_w++;
      j++;
    } else { break; }
  }
  oend2 = j;

  if (dol_continue_w == 4){
    owhere = omokjxywhere;
    if(omokj[owhere-oend1] == 0 ){
      dol_next_bwhere_w4 = owhere-oend1;
    }
    if(omokj[owhere+oend2] == 0){
      dol_next_bwhere_w4 = owhere+oend2;
    }
    dol_white_continue4 = 4;
  }


  // Check_4 _ �»��밢��
    dol_continue_w = 1;
    owherex = parseInt(omokjxywhere / 19) + 1;
    owherey = omokjxywhere % 19;
    if(owherey == 0 ){ owherey = 19; }
    i = 1;
    while(i<=5){
      owherex = owherex - 1;
      owherey = owherey - 1;
      if( owherex >= 1 && owherey >= 1 && dol_continue == 1 && omokj[omokjxywhere-(20*i)] == 1 ){
        dol_continue_w++;
        i++;
      } else { break; }
    }
    oend1 = i*20;
    owherex = parseInt(omokjxywhere / 19) + 1;
    owherey = omokjxywhere % 19;
    if(owherey == 0 ){ owherey = 19; }
    j = 1;
    while(j<=5){
      owherex = owherex + 1;
      owherey = owherey + 1;
      if( owherex <= 19 && owherey <= 19 && dol_continue == 1 && omokj[omokjxywhere+(20*j)] == 1 ){
        dol_continue_w++;
        j++;
      } else { break; }
    }
    oend2 = j*20;

    if (dol_continue_w == 4){
      owhere = omokjxywhere;
      if(omokj[owhere-oend1] == 0 ){
        dol_next_bwhere_w4 = owhere-oend1;
      }
      if(omokj[owhere+oend2] == 0){
        dol_next_bwhere_w4 = owhere+oend2;
      }
      dol_white_continue4 = 4;
    }


    // Check_4 _ �����밢��
      dol_continue_w = 1;
      owherex = parseInt(omokjxywhere / 19) + 1;
      owherey = omokjxywhere % 19;
      if(owherey == 0 ){ owherey = 19; }
      i = 1;
      while(i<=5){
        owherex = owherex - 1;
        owherey = owherey + 1;
        if( owherex >= 1 && owherey <= 19 && dol_continue == 1 && omokj[omokjxywhere-(18*i)] == 1 ){
          dol_continue_w++;
          i++;
        } else { break; }
      }
      oend1 = i*18;
      owherex = parseInt(omokjxywhere / 19) + 1;
      owherey = omokjxywhere % 19;
      if(owherey == 0 ){ owherey = 19; }
      j = 1;
      while(j<=5){
        owherex = owherex + 1;
        owherey = owherey - 1;
        if( owherex <= 19 && owherey >= 1 && dol_continue == 1 && omokj[omokjxywhere+(18*j)] == 1 ){
          dol_continue_w++;
          j++;
        } else { break; }
      }
      oend2 = j*18;

      if (dol_continue_w == 4){
        owhere = omokjxywhere;
        if(omokj[owhere-oend1] == 0 ){
          dol_next_bwhere_w4 = owhere-oend1;
        }
        if(omokj[owhere+oend2] == 0){
          dol_next_bwhere_w4 = owhere+oend2;
        }
        dol_white_continue4 = 4;
      }


} // check_4 �Լ� ��




// check_3 �Լ� - ������ ( )***( )
function check_3() {
  var dol_continue_w;
  var dol_continue_wtext;
  var i, j;
  var owhere;
  var owherex;
  var owherey;
  var oend1, oend2;
  dol_continue_wtext = "";


  // Check_3 _ ������
    dol_continue_w = 1;
    dol_white_continue = 1;
    owhere = omokjxywhere;
    i = 1;
    while(i<=4){
      owhere = owhere - 19;
      if( owhere > 0 && dol_continue == 1 && omokj[owhere] == 1 ){
        dol_continue_w++;
        i++;
      } else { break; }
    }
    oend1 = i;
    owhere = omokjxywhere;
    j = 1;
    while(j<=4){
      owhere = owhere + 19;
      if( owhere < 362 && dol_continue == 1 && omokj[owhere] == 1 ){
        dol_continue_w++;
        j++;
      } else { break; }
    }
    oend2 = j;

    if (dol_continue_w == 3){
      owhere = omokjxywhere;
      if(omokj[owhere-19*oend1] == 0 && omokj[owhere+19*oend2] == 0){
        dol_next_bwhere_w3 = owhere-19*oend1;
        dol_white_continue = 3;
      }
    }

    // Check_3 _ ������
      dol_continue_w = 1;
      owhere = omokjxywhere % 19;
      if(owhere == 0 ){ owhere = 19; }
      i = 1;
      while(i<=4){
        owhere = owhere - 1;
        if( owhere >= 1 && dol_continue == 1 && omokj[omokjxywhere-i] == 1 ){
          dol_continue_w++;
          i++;
        } else { break; }
      }
      oend1 = i;
      owhere = omokjxywhere % 19;
      if(owhere == 0 ){ owhere = 19; }
      j = 1;
      while(j<=4){
        owhere = owhere + 1;
        if( owhere <= 19 && dol_continue == 1 && omokj[omokjxywhere+j] == 1 ){
          dol_continue_w++;
          j++;
        } else { break; }
      }
      oend2 = j;

      if (dol_continue_w == 3){
        owhere = omokjxywhere;
        if(omokj[owhere-oend1] == 0 && omokj[owhere+oend2] == 0){
          dol_next_bwhere_w3 = owhere-oend1;
          dol_white_continue = 3;
        }
      }


      // Check_3 _ �»��밢��
        dol_continue_w = 1;
        owherex = parseInt(omokjxywhere / 19) + 1;
        owherey = omokjxywhere % 19;
        if(owherey == 0 ){ owherey = 19; }
        i = 1;
        while(i<=4){
          owherex = owherex - 1;
          owherey = owherey - 1;
          if( owherex >= 1 && owherey >= 1 && dol_continue == 1 && omokj[omokjxywhere-(20*i)] == 1 ){
            dol_continue_w++;
            i++;
          } else { break; }
        }
        oend1 = i*20;
        owherex = parseInt(omokjxywhere / 19) + 1;
        owherey = omokjxywhere % 19;
        if(owherey == 0 ){ owherey = 19; }
        j = 1;
        while(j<=4){
          owherex = owherex + 1;
          owherey = owherey + 1;
          if( owherex <= 19 && owherey <= 19 && dol_continue == 1 && omokj[omokjxywhere+(20*j)] == 1 ){
            dol_continue_w++;
            j++;
          } else { break; }
        }
        oend2 = j*20;

        if (dol_continue_w == 3){
          owhere = omokjxywhere;
          if(omokj[owhere-oend1] == 0 && omokj[owhere+oend2] == 0){
            dol_next_bwhere_w3 = owhere-oend1;
            dol_white_continue = 3;
          }
        }


        // Check_3 _ �����밢��
          dol_continue_w = 1;
          owherex = parseInt(omokjxywhere / 19) + 1;
          owherey = omokjxywhere % 19;
          if(owherey == 0 ){ owherey = 19; }
          i = 1;
          while(i<=4){
            owherex = owherex - 1;
            owherey = owherey + 1;
            if( owherex >= 1 && owherey <= 19 && dol_continue == 1 && omokj[omokjxywhere-(18*i)] == 1 ){
              dol_continue_w++;
              i++;
            } else { break; }
          }
          oend1 = i*18;
          owherex = parseInt(omokjxywhere / 19) + 1;
          owherey = omokjxywhere % 19;
          if(owherey == 0 ){ owherey = 19; }
          j = 1;
          while(j<=4){
            owherex = owherex + 1;
            owherey = owherey - 1;
            if( owherex <= 19 && owherey >=1 && dol_continue == 1 && omokj[omokjxywhere+(18*j)] == 1 ){
              dol_continue_w++;
              j++;
            } else { break; }
          }
          oend2 = j*18;

          if (dol_continue_w == 3){
            owhere = omokjxywhere;
            if(omokj[owhere-oend1] == 0 && omokj[owhere+oend2] == 0){
              dol_next_bwhere_w3 = owhere-oend1;
              dol_white_continue = 3;
            }
          }


} // check_3 �Լ� ��



// attackcheck4 �Լ� - ���� [*]0000[ ]
function attackcheck4() {
    var dol_continue_b;
    var i, j;
    var owhere;
    var owherex;
    var owherey;
    var oend1, oend2;
    var blackwhere;



    for(blackwhere=1; blackwhere <= 361; blackwhere++){

      if(omokj[blackwhere] == -1 ){

        // Check_4 _ ������
        dol_continue_b = 1;
        dol_black_continue4 = 1;
        owhere = blackwhere;
        i = 1;
        while(i<=5){
          owhere = owhere - 19;
          if( owhere > 0 && omokj[owhere] == -1 ){
            dol_continue_b++;
            i++;
          } else { break; }
        }
        oend1 = i;
        owhere = blackwhere;
        j = 1;
        while(j<=5){
          owhere = owhere + 19;
          if( owhere < 362 && omokj[owhere] == -1 ){
            dol_continue_b++;
            j++;
          } else { break; }
        }
        oend2 = j;

        if (dol_continue_b == 4){
          owhere = blackwhere;
          if(omokj[owhere-19*oend1] == 0 ){
            dol_next_bwhere_b4 = owhere-19*oend1;
            dol_black_continue4 = 4;
            break;
          }
          if(omokj[owhere+19*oend2] == 0){
            dol_next_bwhere_b4 = owhere+19*oend2;
            dol_black_continue4 = 4;
            break;
          }
        }

          // Check_4 _ ������
          dol_continue_b = 1;
          dol_black_continue4 = 1;
          owhere = blackwhere % 19;
          if(owhere == 0 ){ owhere = 19; }
          i = 1;
          while(i<=5){
            owhere = owhere - 1;
            if( owhere >= 1 && omokj[blackwhere-i] == -1 ){
              dol_continue_b++;
              i++;
            } else { break; }
          }
          oend1 = i;
          owhere = blackwhere % 19;
          if(owhere == 0 ){ owhere = 19; }
          j = 1;
          while(j<=5){
            owhere = owhere + 1;
            if( owhere <= 19 && omokj[blackwhere+j] == -1 ){
              dol_continue_b++;
              j++;
            } else { break; }
          }
          oend2 = j;

          if (dol_continue_b == 4){
            owhere = blackwhere;
            if(omokj[owhere-oend1] == 0 ){
              dol_next_bwhere_b4 = owhere-oend1;
              dol_black_continue4 = 4;
              break;
            }
            if(omokj[owhere+oend2] == 0){
              dol_next_bwhere_b4 = owhere+oend2;
              dol_black_continue4 = 4;
              break;
            }
          }


          // Check_4 _ �»��밢��
            dol_continue_b = 1;
            dol_black_continue4 = 1;
            owherex = parseInt(blackwhere / 19) + 1;
            owherey = blackwhere % 19;
            if(owherey == 0 ){ owherey = 19; }
            i = 1;
            while(i<=5){
              owherex = owherex - 1;
              owherey = owherey - 1;
              if( owherex >= 1 && owherey >= 1 && omokj[blackwhere-(20*i)] == -1 ){
                dol_continue_b++;
                i++;
              } else { break; }
            }
            oend1 = i*20;

            owherex = parseInt(blackwhere / 19) + 1;
            owherey = blackwhere % 19;
            if(owherey == 0 ){ owherey = 19; }
            j = 1;
            while(j<=5){
              owherex = owherex + 1;
              owherey = owherey + 1;
              if( owherex <= 19 && owherey <=19 && omokj[blackwhere+(20*j)] == -1 ){
                dol_continue_b++;
                j++;
              } else { break; }
            }
            oend2 = j*20;

            if (dol_continue_b == 4){
              owhere = blackwhere;
              if(omokj[owhere-oend1] == 0 ){
                dol_next_bwhere_b4 = owhere-oend1;
                dol_black_continue4 = 4;
                break;
              }
              if(omokj[owhere+oend2] == 0){
                dol_next_bwhere_b4 = owhere+oend2;
                dol_black_continue4 = 4;
                break;
              }
            }


            // Check_4 _ �����밢��
              dol_continue_b = 1;
              dol_black_continue4 = 1;
              owherex = parseInt(blackwhere / 19) + 1;
              owherey = blackwhere % 19;
              if(owherey == 0 ){ owherey = 19; }
              i = 1;
              while(i<=5){
                owherex = owherex - 1;
                owherey = owherey + 1;
                if( owherex >= 1 && owherey <= 19 && omokj[blackwhere-(18*i)] == -1 ){
                  dol_continue_b++;
                  i++;
                } else { break; }
              }
              oend1 = i*18;

              owherex = parseInt(blackwhere / 19) + 1;
              owherey = blackwhere % 19;
              if(owherey == 0 ){ owherey = 19; }
              j = 1;
              while(j<=5){
                owherex = owherex + 1;
                owherey = owherey - 1;
                if( owherex <= 19 && owherey >=1 && omokj[blackwhere+(18*j)] == -1 ){
                  dol_continue_b++;
                  j++;
                } else { break; }
              }
              oend2 = j*18;

              if (dol_continue_b == 4){
                owhere = blackwhere;
                if(omokj[owhere-oend1] == 0 ){
                  dol_next_bwhere_b4 = owhere-oend1;
                  dol_black_continue4 = 4;
                  break;
                }
                if(omokj[owhere+oend2] == 0){
                  dol_next_bwhere_b4 = owhere+oend2;
                  dol_black_continue4 = 4;
                  break;
                }
              }

      }

    }

} // attackcheck4() �Լ� ��



// attackcheck3 �Լ� - ���� ( )000( )
function attackcheck3() {
    var dol_continue_b;
    var i, j;
    var owhere;
    var owherex;
    var owherey;
    var oend1, oend2;
    var blackwhere;



    for(blackwhere=1; blackwhere <= 361; blackwhere++){

      if(omokj[blackwhere] == -1 ){

        // Check_3 _ ������
        dol_continue_b = 1;
        dol_black_continue3 = 1;
        owhere = blackwhere;
        i = 1;
        while(i<=5){
          owhere = owhere - 19;
          if( owhere > 0 && omokj[owhere] == -1 ){
            dol_continue_b++;
            i++;
          } else { break; }
        }
        oend1 = i;
        owhere = blackwhere;
        j = 1;
        while(j<=5){
          owhere = owhere + 19;
          if( owhere < 362 && omokj[owhere] == -1 ){
            dol_continue_b++;
            j++;
          } else { break; }
        }
        oend2 = j;

        if (dol_continue_b == 3){
          owhere = blackwhere;
          if(omokj[owhere-19*oend1] == 0 && omokj[owhere+19*oend2] == 0){
            dol_next_bwhere_b3 = owhere-19*oend1;
            dol_black_continue3 = 3;
            break;
          }
        }

          // Check_3 _ ������
          dol_continue_b = 1;
          dol_black_continue3 = 1;
          owhere = blackwhere % 19;
          if(owhere == 0 ){ owhere = 19; }
          i = 1;
          while(i<=5){
            owhere = owhere - 1;
            if( owhere >= 1 && omokj[blackwhere-i] == -1 ){
              dol_continue_b++;
              i++;
            } else { break; }
          }
          oend1 = i;
          owhere = blackwhere % 19;
          if(owhere == 0 ){ owhere = 19; }
          j = 1;
          while(j<=5){
            owhere = owhere + 1;
            if( owhere <= 19 && omokj[blackwhere+j] == -1 ){
              dol_continue_b++;
              j++;
            } else { break; }
          }
          oend2 = j;

          if (dol_continue_b == 3){
            owhere = blackwhere;
            if(omokj[owhere-oend1] == 0 && omokj[owhere+oend2] == 0){
              dol_next_bwhere_b3 = owhere-oend1;
              dol_black_continue3 = 3;
              break;
            }
          }


          // Check_3 _ �»��밢��
            dol_continue_b = 1;
            dol_black_continue3 = 1;
            owherex = parseInt(blackwhere / 19) + 1;
            owherey = blackwhere % 19;
            if(owherey == 0 ){ owherey = 19; }
            i = 1;
            while(i<=5){
              owherex = owherex - 1;
              owherey = owherey - 1;
              if( owherex >= 1 && owherey >= 1 && omokj[blackwhere-(20*i)] == -1 ){
                dol_continue_b++;
                i++;
              } else { break; }
            }
            oend1 = i*20;

            owherex = parseInt(blackwhere / 19) + 1;
            owherey = blackwhere % 19;
            if(owherey == 0 ){ owherey = 19; }
            j = 1;
            while(j<=5){
              owherex = owherex + 1;
              owherey = owherey + 1;
              if( owherex <= 19 && owherey <=19 && omokj[blackwhere+(20*j)] == -1 ){
                dol_continue_b++;
                j++;
              } else { break; }
            }
            oend2 = j*20;

            if (dol_continue_b == 3){
              owhere = blackwhere;
              if(omokj[owhere-oend1] == 0 && omokj[owhere+oend2] == 0){
                dol_next_bwhere_b3 = owhere-oend1;
                dol_black_continue3 = 3;
                break;
              }
            }


            // Check_3 _ �����밢��
              dol_continue_b = 1;
              dol_black_continue3 = 1;
              owherex = parseInt(blackwhere / 19) + 1;
              owherey = blackwhere % 19;
              if(owherey == 0 ){ owherey = 19; }
              i = 1;
              while(i<=5){
                owherex = owherex - 1;
                owherey = owherey + 1;
                if( owherex >= 1 && owherey <= 19 && omokj[blackwhere-(18*i)] == -1 ){
                  dol_continue_b++;
                  i++;
                } else { break; }
              }
              oend1 = i*18;

              owherex = parseInt(blackwhere / 19) + 1;
              owherey = blackwhere % 19;
              if(owherey == 0 ){ owherey = 19; }
              j = 1;
              while(j<=5){
                owherex = owherex + 1;
                owherey = owherey - 1;
                if( owherex <= 19 && owherey >=1 && omokj[blackwhere+(18*j)] == -1 ){
                  dol_continue_b++;
                  j++;
                } else { break; }
              }
              oend2 = j*18;

              if (dol_continue_b == 3){
                owhere = blackwhere;
                if(omokj[owhere-oend1] == 0 && omokj[owhere+oend2] == 0){
                  dol_next_bwhere_b3 = owhere-oend1;
                  dol_black_continue3 = 3;
                  break;
                }
              }

      }

    }

} // attackcheck3() �Լ� ��



// attackcheck4b �Լ� - ���� 0[ ]000
function attackcheck4b() {
    var dol_continue_b;
    var i, j;
    var owhere;
    var owherex;
    var owherey;
    var blackwhere;



    for(blackwhere=1; blackwhere <= 361; blackwhere++){

      if(omokj[blackwhere] == 0 ){

        // Check_4b _ ������
        dol_continue_b = 0;
        dol_black_continue4b = 1;
        owhere = blackwhere;
        i = 1;
        while(i<=4){
          owhere = owhere - 19;
          if( owhere > 0 && omokj[owhere] == -1 ){
            dol_continue_b++;
            i++;
          } else { break; }
        }
        owhere = blackwhere;
        j = 1;
        while(j<=4){
          owhere = owhere + 19;
          if( owhere < 362 && omokj[owhere] == -1 ){
            dol_continue_b++;
            j++;
          } else { break; }
        }

        if (dol_continue_b == 4){
            dol_next_bwhere_b4b = blackwhere;
            dol_black_continue4b = 4;
            break;
          }


          // Check_4b _ ������
          dol_continue_b = 0;
          dol_black_continue4b = 1;
          owhere = blackwhere % 19;
          if(owhere == 0 ){ owhere = 19; }
          i = 1;
          while(i<=4){
            owhere = owhere - 1;
            if( owhere >= 1 && omokj[blackwhere-i] == -1 ){
              dol_continue_b++;
              i++;
            } else { break; }
          }
          owhere = blackwhere % 19;
          if(owhere == 0 ){ owhere = 19; }
          j = 1;
          while(j<=4){
            owhere = owhere + 1;
            if( owhere <= 19 && omokj[blackwhere+j] == -1 ){
              dol_continue_b++;
              j++;
            } else { break; }
          }

          if (dol_continue_b == 4){
              dol_next_bwhere_b4b = blackwhere;
              dol_black_continue4b = 4;
              break;
            }


          // Check_4b _ �»��밢��
            dol_continue_b = 0;
            dol_black_continue4b = 1;
            owherex = parseInt(blackwhere / 19) + 1;
            owherey = blackwhere % 19;
            if(owherey == 0 ){ owherey = 19; }
            i = 1;
            while(i<=4){
              owherex = owherex - 1;
              owherey = owherey - 1;
              if( owherex >= 1 && owherey >= 1 && omokj[blackwhere-(20*i)] == -1 ){
                dol_continue_b++;
                i++;
              } else { break; }
            }

            owherex = parseInt(blackwhere / 19) + 1;
            owherey = blackwhere % 19;
            if(owherey == 0 ){ owherey = 19; }
            j = 1;
            while(j<=4){
              owherex = owherex + 1;
              owherey = owherey + 1;
              if( owherex <= 19 && owherey <=19 && omokj[blackwhere+(20*j)] == -1 ){
                dol_continue_b++;
                j++;
              } else { break; }
            }

            if (dol_continue_b == 4){
                dol_next_bwhere_b4b = blackwhere;
                dol_black_continue4b = 4;
                break;
              }


            // Check_4b _ �����밢��
              dol_continue_b = 0;
              dol_black_continue4b = 1;
              owherex = parseInt(blackwhere / 19) + 1;
              owherey = blackwhere % 19;
              if(owherey == 0 ){ owherey = 19; }
              i = 1;
              while(i<=4){
                owherex = owherex - 1;
                owherey = owherey + 1;
                if( owherex >= 1 && owherey <= 19 && omokj[blackwhere-(18*i)] == -1 ){
                  dol_continue_b++;
                  i++;
                } else { break; }
              }

              owherex = parseInt(blackwhere / 19) + 1;
              owherey = blackwhere % 19;
              if(owherey == 0 ){ owherey = 19; }
              j = 1;
              while(j<=4){
                owherex = owherex + 1;
                owherey = owherey - 1;
                if( owherex <= 19 && owherey >=1 && omokj[blackwhere+(18*j)] == -1 ){
                  dol_continue_b++;
                  j++;
                } else { break; }
              }

              if (dol_continue_b == 4){
                  dol_next_bwhere_b4b = blackwhere;
                  dol_black_continue4b = 4;
                  break;
                }

      }

    }

} // attackcheck4b() �Լ� ��


// whitecheck4w �Լ� - ������ o( )ooo
function whitecheck4w() {
    var dol_continue_b;
    var i, j;
    var owhere;
    var owherex;
    var owherey;
    var blackwhere;


    for(blackwhere=1; blackwhere <= 361; blackwhere++){

      if(omokj[blackwhere] == 0 ){

        // Check_4w _ ������
        dol_continue_b = 0;
        dol_wihte_continue4w = 1;
        owhere = blackwhere;
        i = 1;
        while(i<=4){
          owhere = owhere - 19;
          if( owhere > 0 && omokj[owhere] == 1 ){
            dol_continue_b++;
            i++;
          } else { break; }
        }
        owhere = blackwhere;
        j = 1;
        while(j<=4){
          owhere = owhere + 19;
          if( owhere < 362 && omokj[owhere] == 1 ){
            dol_continue_b++;
            j++;
          } else { break; }
        }

        if (dol_continue_b == 4){
            dol_next_bwhere_w4w = blackwhere;
            dol_white_continue4w = 4;
            break;
          }


          // Check_4b _ ������
          dol_continue_b = 0;
          dol_white_continue4w = 1;
          owhere = blackwhere % 19;
          if(owhere == 0 ){ owhere = 19; }
          i = 1;
          while(i<=4){
            owhere = owhere - 1;
            if( owhere >= 1 && omokj[blackwhere-i] == 1 ){
              dol_continue_b++;
              i++;
            } else { break; }
          }
          owhere = blackwhere % 19;
          if(owhere == 0 ){ owhere = 19; }
          j = 1;
          while(j<=4){
            owhere = owhere + 1;
            if( owhere <= 19 && omokj[blackwhere+j] == 1 ){
              dol_continue_b++;
              j++;
            } else { break; }
          }

          if (dol_continue_b == 4){
              dol_next_bwhere_w4w = blackwhere;
              dol_white_continue4w = 4;
              break;
            }


          // Check_4b _ �»��밢��
            dol_continue_b = 0;
            dol_white_continue4w = 1;
            owherex = parseInt(blackwhere / 19) + 1;
            owherey = blackwhere % 19;
            if(owherey == 0 ){ owherey = 19; }
            i = 1;
            while(i<=4){
              owherex = owherex - 1;
              owherey = owherey - 1;
              if( owherex >= 1 && owherey >= 1 && omokj[blackwhere-(20*i)] == 1 ){
                dol_continue_b++;
                i++;
              } else { break; }
            }

            owherex = parseInt(blackwhere / 19) + 1;
            owherey = blackwhere % 19;
            if(owherey == 0 ){ owherey = 19; }
            j = 1;
            while(j<=4){
              owherex = owherex + 1;
              owherey = owherey + 1;
              if( owherex <= 19 && owherey <=19 && omokj[blackwhere+(20*j)] == 1 ){
                dol_continue_b++;
                j++;
              } else { break; }
            }

            if (dol_continue_b == 4){
                dol_next_bwhere_w4w = blackwhere;
                dol_white_continue4w = 4;
                break;
              }


            // Check_4b _ �����밢��
              dol_continue_b = 0;
              dol_white_continue4w = 1;
              owherex = parseInt(blackwhere / 19) + 1;
              owherey = blackwhere % 19;
              if(owherey == 0 ){ owherey = 19; }
              i = 1;
              while(i<=4){
                owherex = owherex - 1;
                owherey = owherey + 1;
                if( owherex >= 1 && owherey <= 19 && omokj[blackwhere-(18*i)] == 1 ){
                  dol_continue_b++;
                  i++;
                } else { break; }
              }

              owherex = parseInt(blackwhere / 19) + 1;
              owherey = blackwhere % 19;
              if(owherey == 0 ){ owherey = 19; }
              j = 1;
              while(j<=4){
                owherex = owherex + 1;
                owherey = owherey - 1;
                if( owherex <= 19 && owherey >=1 && omokj[blackwhere+(18*j)] == 1 ){
                  dol_continue_b++;
                  j++;
                } else { break; }
              }

              if (dol_continue_b == 4){
                  dol_next_bwhere_w4w = blackwhere;
                  dol_white_continue4w = 4;
                  break;
                }

      }

    }

} // whitecheck4w() �Լ� ��




// blackcheck3b �Լ� - ���� 0( )00
function blackcheck3b() {
    var dol_continue_b;
    var i, j;
    var owhere;
    var owherex;
    var owherey;
    var oend1, oend2;
    var blackwhere;



    for(blackwhere=1; blackwhere <= 361; blackwhere++){

      if(omokj[blackwhere] == 0 ){

        // Check_3b _ ������
        dol_continue_b = 0;
        dol_black_continue3b = 1;
        owhere = blackwhere;
        i = 1;
        while(i<=3){
          owhere = owhere - 19;
          if( owhere > 0 && omokj[owhere] == -1 ){
            dol_continue_b++;
            i++;
          } else { break; }
        }
        oend1 = i;
        owhere = blackwhere;
        j = 1;
        while(j<=3){
          owhere = owhere + 19;
          if( owhere < 362 && omokj[owhere] == -1 ){
            dol_continue_b++;
            j++;
          } else { break; }
        }
        oend2 = j;

        if (dol_continue_b == 3){
          owhere = blackwhere;
          if(omokj[owhere-19*oend1] == 0 && omokj[owhere+19*oend2] == 0){
            dol_next_bwhere_b3b = blackwhere;
            dol_black_continue3b = 3;
            break;
          }
        }

          // Check_3b _ ������
          dol_continue_b = 0;
          dol_black_continue3b = 1;
          owhere = blackwhere % 19;
          if(owhere == 0 ){ owhere = 19; }
          i = 1;
          while(i<=3){
            owhere = owhere - 1;
            if( owhere >= 1 && omokj[blackwhere-i] == -1 ){
              dol_continue_b++;
              i++;
            } else { break; }
          }
          oend1 = i;
          owhere = blackwhere % 19;
          if(owhere == 0 ){ owhere = 19; }
          j = 1;
          while(j<=3){
            owhere = owhere + 1;
            if( owhere <= 19 && omokj[blackwhere+j] == -1 ){
              dol_continue_b++;
              j++;
            } else { break; }
          }
          oend2 = j;

          if (dol_continue_b == 3){
            owhere = blackwhere;
            if(omokj[owhere-oend1] == 0 && omokj[owhere+oend2] == 0){
              dol_next_bwhere_b3b = blackwhere;
              dol_black_continue3b = 3;
              break;
            }
          }


          // Check_3b _ �»��밢��
            dol_continue_b = 0;
            dol_black_continue3b = 1;
            owherex = parseInt(blackwhere / 19) + 1;
            owherey = blackwhere % 19;
            if(owherey == 0 ){ owherey = 19; }
            i = 1;
            while(i<=3){
              owherex = owherex - 1;
              owherey = owherey - 1;
              if( owherex >= 1 && owherey >= 1 && omokj[blackwhere-(20*i)] == -1 ){
                dol_continue_b++;
                i++;
              } else { break; }
            }
            oend1 = i*20;

            owherex = parseInt(blackwhere / 19) + 1;
            owherey = blackwhere % 19;
            if(owherey == 0 ){ owherey = 19; }
            j = 1;
            while(j<=3){
              owherex = owherex + 1;
              owherey = owherey + 1;
              if( owherex <= 19 && owherey <=19 && omokj[blackwhere+(20*j)] == -1 ){
                dol_continue_b++;
                j++;
              } else { break; }
            }
            oend2 = j*20;

            if (dol_continue_b == 3){
              owhere = blackwhere;
              if(omokj[owhere-oend1] == 0 && omokj[owhere+oend2] == 0){
                dol_next_bwhere_b3b = blackwhere;
                dol_black_continue3b = 3;
                break;
              }
            }


            // Check_3b _ �����밢��
              dol_continue_b = 0;
              dol_black_continue3b = 1;
              owherex = parseInt(blackwhere / 19) + 1;
              owherey = blackwhere % 19;
              if(owherey == 0 ){ owherey = 19; }
              i = 1;
              while(i<=3){
                owherex = owherex - 1;
                owherey = owherey + 1;
                if( owherex >= 1 && owherey <= 19 && omokj[blackwhere-(18*i)] == -1 ){
                  dol_continue_b++;
                  i++;
                } else { break; }
              }
              oend1 = i*18;

              owherex = parseInt(blackwhere / 19) + 1;
              owherey = blackwhere % 19;
              if(owherey == 0 ){ owherey = 19; }
              j = 1;
              while(j<=3){
                owherex = owherex + 1;
                owherey = owherey - 1;
                if( owherex <= 19 && owherey >=1 && omokj[blackwhere+(18*j)] == -1 ){
                  dol_continue_b++;
                  j++;
                } else { break; }
              }
              oend2 = j*18;

              if (dol_continue_b == 3){
                owhere = blackwhere;
                if(omokj[owhere-oend1] == 0 && omokj[owhere+oend2] == 0){
                  dol_next_bwhere_b3b = blackwhere;
                  dol_black_continue3b = 3;
                  break;
                }
              }

      }

    }

} // blackcheck3b �Լ� ��



// whitecheck3w �Լ� - ���� o( )oo
function whitecheck3w() {
    var dol_continue_b;
    var i, j;
    var owhere;
    var owherex;
    var owherey;
    var oend1, oend2;
    var blackwhere;



    for(blackwhere=1; blackwhere <= 361; blackwhere++){

      if(omokj[blackwhere] == 0 ){

        // Check_3b _ ������
        dol_continue_b = 0;
        dol_white_continue3w = 1;
        owhere = blackwhere;
        i = 1;
        while(i<=3){
          owhere = owhere - 19;
          if( owhere > 0 && omokj[owhere] == 1 ){
            dol_continue_b++;
            i++;
          } else { break; }
        }
        oend1 = i;
        owhere = blackwhere;
        j = 1;
        while(j<=3){
          owhere = owhere + 19;
          if( owhere < 362 && omokj[owhere] == 1 ){
            dol_continue_b++;
            j++;
          } else { break; }
        }
        oend2 = j;

        if (dol_continue_b == 3){
          owhere = blackwhere;
          if(omokj[owhere-19*oend1] == 0 && omokj[owhere+19*oend2] == 0){
            dol_next_bwhere_w3w = blackwhere;
            dol_white_continue3w = 3;
            break;
          }
        }

          // Check_3b _ ������
          dol_continue_b = 0;
          dol_white_continue3w = 1;
          owhere = blackwhere % 19;
          if(owhere == 0 ){ owhere = 19; }
          i = 1;
          while(i<=3){
            owhere = owhere - 1;
            if( owhere >= 1 && omokj[blackwhere-i] == 1 ){
              dol_continue_b++;
              i++;
            } else { break; }
          }
          oend1 = i;
          owhere = blackwhere % 19;
          if(owhere == 0 ){ owhere = 19; }
          j = 1;
          while(j<=3){
            owhere = owhere + 1;
            if( owhere <= 19 && omokj[blackwhere+j] == 1 ){
              dol_continue_b++;
              j++;
            } else { break; }
          }
          oend2 = j;

          if (dol_continue_b == 3){
            owhere = blackwhere;
            if(omokj[owhere-oend1] == 0 && omokj[owhere+oend2] == 0){
              dol_next_bwhere_w3w = blackwhere;
              dol_white_continue3w = 3;
              break;
            }
          }


          // Check_3b _ �»��밢��
            dol_continue_b = 0;
            dol_white_continue3w = 1;
            owherex = parseInt(blackwhere / 19) + 1;
            owherey = blackwhere % 19;
            if(owherey == 0 ){ owherey = 19; }
            i = 1;
            while(i<=3){
              owherex = owherex - 1;
              owherey = owherey - 1;
              if( owherex >= 1 && owherey >= 1 && omokj[blackwhere-(20*i)] == 1 ){
                dol_continue_b++;
                i++;
              } else { break; }
            }
            oend1 = i*20;

            owherex = parseInt(blackwhere / 19) + 1;
            owherey = blackwhere % 19;
            if(owherey == 0 ){ owherey = 19; }
            j = 1;
            while(j<=3){
              owherex = owherex + 1;
              owherey = owherey + 1;
              if( owherex <= 19 && owherey <=19 && omokj[blackwhere+(20*j)] == 1 ){
                dol_continue_b++;
                j++;
              } else { break; }
            }
            oend2 = j*20;

            if (dol_continue_b == 3){
              owhere = blackwhere;
              if(omokj[owhere-oend1] == 0 && omokj[owhere+oend2] == 0){
                dol_next_bwhere_w3w = blackwhere;
                dol_white_continue3w = 3;
                break;
              }
            }


            // Check_3b _ �����밢��
              dol_continue_b = 0;
              dol_white_continue3w = 1;
              owherex = parseInt(blackwhere / 19) + 1;
              owherey = blackwhere % 19;
              if(owherey == 0 ){ owherey = 19; }
              i = 1;
              while(i<=3){
                owherex = owherex - 1;
                owherey = owherey + 1;
                if( owherex >= 1 && owherey <= 19 && omokj[blackwhere-(18*i)] == 1 ){
                  dol_continue_b++;
                  i++;
                } else { break; }
              }
              oend1 = i*18;

              owherex = parseInt(blackwhere / 19) + 1;
              owherey = blackwhere % 19;
              if(owherey == 0 ){ owherey = 19; }
              j = 1;
              while(j<=3){
                owherex = owherex + 1;
                owherey = owherey - 1;
                if( owherex <= 19 && owherey >=1 && omokj[blackwhere+(18*j)] == 1 ){
                  dol_continue_b++;
                  j++;
                } else { break; }
              }
              oend2 = j*18;

              if (dol_continue_b == 3){
                owhere = blackwhere;
                if(omokj[owhere-oend1] == 0 && omokj[owhere+oend2] == 0){
                  dol_next_bwhere_w3w = blackwhere;
                  dol_white_continue3w = 3;
                  break;
                }
              }

      }

    }

} // whitecheck3w �Լ� ��



// make3white() �Լ� - ���� ( )( )**( )
function make3white() {
    var dol_continue_b;
    var owhere;
    var owherex;
    var owherey;
    var blackwhere;



    for(blackwhere=1; blackwhere <= 361; blackwhere++){

      if(omokj[blackwhere] == -1 ){

        dol_white_continue2 = 1;

        // make3white _ ������
        owhere = blackwhere;
        if(owhere-38 >=1 && owhere+38 <= 361
            && omokj[blackwhere-19] == 0 && omokj[blackwhere-38] == 0
            && omokj[blackwhere+19] == -1 && omokj[blackwhere+38] == 0){
            dol_next_bwhere_w2 = blackwhere-19;
            dol_white_continue2 = 2;
            break;
          }
          if(owhere-38 >= 1 && owhere+38 <= 361
              && omokj[blackwhere-19] == -1 && omokj[blackwhere-38] == 0
              && omokj[blackwhere+19] == 0 && omokj[blackwhere+38] == 0){
              dol_next_bwhere_w2 = blackwhere+19;
              dol_white_continue2 = 2;
              break;
          }

          // make3white _ ������
          owhere = blackwhere % 19;
          if(owhere == 0){ owhere = 19; }
          if(owhere-2 >= 1 && owhere+2 <= 19
              && omokj[blackwhere-1] == 0 && omokj[blackwhere-2] == 0
              && omokj[blackwhere+1] == -1 && omokj[blackwhere+2] == 0){
              dol_next_bwhere_w2 = blackwhere-1;
              dol_white_continue2 = 2;
              break;
            }
            if(owhere-2 >= 1 && owhere+2 <= 19
                && omokj[blackwhere-1] == -1 && omokj[blackwhere-2] == 0
                && omokj[blackwhere+1] == 0 && omokj[blackwhere+2] == 0){
                dol_next_bwhere_w2 = blackwhere+1;
                dol_white_continue2 = 2;
                break;
              }


            // make3white _ �»��밢��
            owherex = parseInt(blackwhere / 19) + 1;
            owherey = blackwhere % 19;
            if(owherey == 0){ owherey = 19; }
            if(owherex-2 >= 1 && owherex+2 <= 19 && owherey-2 >= 1 && owherey+2 <=19
                && omokj[blackwhere-20] == 0 && omokj[blackwhere-40] == 0
                && omokj[blackwhere+20] == -1 && omokj[blackwhere+40] == 0){
                dol_next_bwhere_w2 = blackwhere-20;
                dol_white_continue2 = 2;
                break;
              }
              if(owherex-2 >= 1 && owherex+2 <= 19 && owherey-2 >= 1 && owherey+2 <=19
                  && omokj[blackwhere-20] == -1 && omokj[blackwhere-40] == 0
                  && omokj[blackwhere+20] == 0 && omokj[blackwhere+40] == 0){
                  dol_next_bwhere_w2 = blackwhere+20;
                  dol_white_continue2 = 2;
                  break;
              }


              // make3white _ �����밢��
              owherex = parseInt(blackwhere / 19) + 1;
              owherey = blackwhere % 19;
              if(owherey == 0){ owherey = 19; }
              if(owherex-2 >= 1 && owherex+2 <= 19 && owherey-2 >= 1 && owherey+2 <=19
                  && omokj[blackwhere-18] == 0 && omokj[blackwhere-36] == 0
                  && omokj[blackwhere+18] == -1 && omokj[blackwhere+36] == 0){
                  dol_next_bwhere_w2 = blackwhere-18;
                  dol_white_continue2 = 2;
                  break;
                }
                if(owherex-2 >= 1 && owherex+2 <= 19 && owherey-2 >= 1 && owherey+2 <=19
                    && omokj[blackwhere-18] == -1 && omokj[blackwhere-36] == 0
                    && omokj[blackwhere+18] == 0 && omokj[blackwhere+36] == 0){
                    dol_next_bwhere_w2 = blackwhere+18;
                    dol_white_continue2 = 2;
                    break;
                }


      }

    }

} // make3white �Լ� ��



// make3white2w() �Լ� - ���� ( )o( )o( )
function make3white2w() {
    var dol_continue_b;
    var owhere;
    var owherex;
    var owherey;
    var blackwhere;



    for(blackwhere=1; blackwhere <= 361; blackwhere++){

      if(omokj[blackwhere] == 0 ){

        dol_white_continue2w = 1;

        // make3white2w _ ������
        owhere = blackwhere;
        if(owhere-38 >=1 && owhere+38 <= 361
            && omokj[blackwhere-19] == -1 && omokj[blackwhere-38] == 0
            && omokj[blackwhere+19] == -1 && omokj[blackwhere+38] == 0){
            dol_next_bwhere_w2w = blackwhere;
            dol_white_continue2w = 2;
            break;
          }

          // make3white2w _ ������
          owhere = blackwhere % 19;
          if(owhere == 0){ owhere = 19; }
          if(owhere-2 >= 1 && owhere+2 <= 19
              && omokj[blackwhere-1] == -1 && omokj[blackwhere-2] == 0
              && omokj[blackwhere+1] == -1 && omokj[blackwhere+2] == 0){
              dol_next_bwhere_w2w = blackwhere;
              dol_white_continue2w = 2;
              break;
            }

            // make3white2w _ �»��밢��
            owherex = parseInt(blackwhere / 19) + 1;
            owherey = blackwhere % 19;
            if(owherey == 0){ owherey = 19; }
            if(owherex-2 >= 1 && owherex+2 <= 19 && owherey-2 >= 1 && owherey+2 <=19
                && omokj[blackwhere-20] == -1 && omokj[blackwhere-40] == 0
                && omokj[blackwhere+20] == -1 && omokj[blackwhere+40] == 0){
                dol_next_bwhere_w2w = blackwhere;
                dol_white_continue2w = 2;
                break;
              }

              // make3white2w _ �����밢��
              owherex = parseInt(blackwhere / 19) + 1;
              owherey = blackwhere % 19;
              if(owherey == 0){ owherey = 19; }
              if(owherex-2 >= 1 && owherex+2 <= 19 && owherey-2 >= 1 && owherey+2 <=19
                  && omokj[blackwhere-18] == -1 && omokj[blackwhere-36] == 0
                  && omokj[blackwhere+18] == -1 && omokj[blackwhere+36] == 0){
                  dol_next_bwhere_w2w = blackwhere;
                  dol_white_continue2w = 2;
                  break;
                }

      }

    }

} // make3white2w �Լ� ��




// check_2() �Լ� - ������ ( )( )**( )
function check_2() {
    var dol_continue_b;
    var owhere;
    var owherex;
    var owherey;
    var blackwhere;



    for(blackwhere=1; blackwhere <= 361; blackwhere++){

      if(omokj[blackwhere] == 1 ){

        dol_black_continue2 = 1;

        // check_2 _ ������
        owhere = blackwhere;
        if(owhere-38 >=1 && owhere+38 <= 361
            && omokj[blackwhere-19] == 0 && omokj[blackwhere-38] == 0
            && omokj[blackwhere+19] == 1 && omokj[blackwhere+38] == 0){
            dol_next_bwhere_b2 = blackwhere-19;
            dol_black_continue2 = 2;
            break;
          }
          if(owhere-38 >= 1 && owhere+38 <= 361
              && omokj[blackwhere-19] == 1 && omokj[blackwhere-38] == 0
              && omokj[blackwhere+19] == 0 && omokj[blackwhere+38] == 0){
              dol_next_bwhere_b2 = blackwhere+19;
              dol_black_continue2 = 2;
              break;
          }

          // check_2 _ ������
          owhere = blackwhere % 19;
          if(owhere == 0){ owhere = 19; }
          if(owhere-2 >= 1 && owhere+2 <= 19
              && omokj[blackwhere-1] == 0 && omokj[blackwhere-2] == 0
              && omokj[blackwhere+1] == 1 && omokj[blackwhere+2] == 0){
              dol_next_bwhere_b2 = blackwhere-1;
              dol_black_continue2 = 2;
              break;
            }
            if(owhere-2 >= 1 && owhere+2 <= 19
                && omokj[blackwhere-1] == 1 && omokj[blackwhere-2] == 0
                && omokj[blackwhere+1] == 0 && omokj[blackwhere+2] == 0){
                dol_next_bwhere_b2 = blackwhere+1;
                dol_black_continue2 = 2;
                break;
              }


            // check_2 _ �»��밢��
            owherex = parseInt(blackwhere / 19) + 1;
            owherey = blackwhere % 19;
            if(owherey == 0){ owherey = 19; }
            if(owherex-2 >= 1 && owherex+2 <= 19 && owherey-2 >= 1 && owherey+2 <=19
                && omokj[blackwhere-20] == 0 && omokj[blackwhere-40] == 0
                && omokj[blackwhere+20] == 1 && omokj[blackwhere+40] == 0){
                dol_next_bwhere_b2 = blackwhere-20;
                dol_black_continue2 = 2;
                break;
              }
              if(owherex-2 >= 1 && owherex+2 <= 19 && owherey-2 >= 1 && owherey+2 <=19
                  && omokj[blackwhere-20] == 1 && omokj[blackwhere-40] == 0
                  && omokj[blackwhere+20] == 0 && omokj[blackwhere+40] == 0){
                  dol_next_bwhere_b2 = blackwhere+20;
                  dol_black_continue2 = 2;
                  break;
              }


              // check_2 _ �����밢��
              owherex = parseInt(blackwhere / 19) + 1;
              owherey = blackwhere % 19;
              if(owherey == 0){ owherey = 19; }
              if(owherex-2 >= 1 && owherex+2 <= 19 && owherey-2 >= 1 && owherey+2 <=19
                  && omokj[blackwhere-18] == 0 && omokj[blackwhere-36] == 0
                  && omokj[blackwhere+18] == 1 && omokj[blackwhere+36] == 0){
                  dol_next_bwhere_b2 = blackwhere-18;
                  dol_black_continue2 = 2;
                  break;
                }
                if(owherex-2 >= 1 && owherex+2 <= 19 && owherey-2 >= 1 && owherey+2 <=19
                    && omokj[blackwhere-18] == 1 && omokj[blackwhere-36] == 0
                    && omokj[blackwhere+18] == 0 && omokj[blackwhere+36] == 0){
                    dol_next_bwhere_b2 = blackwhere+18;
                    dol_black_continue2 = 2;
                    break;
                }


      }

    }

} // check_2 �Լ� ��
