/* ************************************ */
/* Define helper functions */
/* ************************************ */
function getLanguage() {
  return jsPsych.initSettings().language;
}

function assessPerformance() { // MOD : no more used
  /* Function to calculate the "credit_var", which is a boolean used to
  credit individual experiments in expfactory.
  */
  var experiment_data = jsPsych.data.getTrialsOfType('single-stim-button');
  var missed_count = 0;
  var trial_count = 0;
  var rt_array = [];
  var rt = 0;
  var avg_rt = -1;
  //record choices participants made
  for (var i = 0; i < experiment_data.length; i++) {
    trial_count += 1
    rt = experiment_data[i].rt
    if (rt == -1) {
      missed_count += 1
    } else {
      rt_array.push(rt)
    }
  }
  //calculate average rt
  if (rt_array.length !== 0) {
    avg_rt = math.median(rt_array)
  } else {
    avg_rt = -1
  }
  credit_var = (avg_rt > 100)
  jsPsych.data.addDataToLastTrial({"credit_var": credit_var})
}

function getTranslatedText(code) {
  var translated_text;
  switch(code) {
    case 0:
      switch(getLanguage()) {
        case "fr":
          translated_text = 'Appuyez sur <strong>Entrée</strong> pour démarrer.';
          break;
        default:
          translated_text = 'Press <strong>Enter</strong> to begin.';
          break;
      }
      break;
    case 1:
      switch(getLanguage()) {
        case "fr":
          translated_text = 'Appuyez sur <strong>Entrée</strong> pour continuer.';
          break;
        default:
          translated_text = 'Press <strong>Enter</strong> to continue.';
          break;
      }
      break;
    case 2:
      switch(getLanguage()) {
        case "fr":
          translated_text = 'Boule en main';
          break;
        default:
          translated_text = 'Ball in hand';
          break;
      }
      break;
    case 3:
      switch(getLanguage()) {
        case "fr":
          translated_text = 'Bravo !';
          break;
        default:
          translated_text = 'You got it!';
          break;
      }
      break;
    case 4:
      switch(getLanguage()) {
        case "fr":
          translated_text = 'Dommage...';
          break;
        default:
          translated_text = "Didn't get that one.";
          break;
      }
      break;
    case 5:
      switch(getLanguage()) {
        case "fr":
          translated_text = 'Passons au problème n°';
          break;
        default:
          translated_text = 'About to start problem ';
          break;
      }
      break;
    case 6:
      switch(getLanguage()) {
        case "fr":
          translated_text = 'Votre Plateau';
          break;
        default:
          translated_text = 'Your Board';
          break;
      }
      break;
    case 7:
      switch(getLanguage()) {
        case "fr":
          translated_text = 'Plateau Objectif';
          break;
        default:
          translated_text = 'Target Board';
          break;
      }
      break;
    case 8:
      switch(getLanguage()) {
        case "fr":
          translated_text = 'Durant ce test, deux plateaux seront présentés simultanément. Chacun comporte des boules de couleurs positionnées sur des piquets comme ceci :';
          break;
        default:
          translated_text = 'During this task, two boards will be presented at a time. The boards will be of colored balls arranged on pegs like this:';
          break;
      }
      break;
    case 9:
      switch(getLanguage()) {
        case "fr":
          translated_text = 'Imaginez que ces boules ont des trous que traversent les piquets. Notez que le premier piquet peut porter trois boules, le second deux, et le troisième une seule.';
          break;
        default:
          translated_text = 'Imagine that these balls have holes through them and the pegs are going through the holes. Notice that the first peg can hold three balls, the second peg can hold two balls, and the third peg can hold one ball.';
          break;
      }
      break;
    case 10:
      switch(getLanguage()) {
        case "fr":
          translated_text = "Votre tâche est de positionner les boules de Votre Plateau de manière identique à la configuration du Plateau Objectif, en un minimum de déplacements.";
          break;
        default:
          translated_text = 'Your task will be to make the arrangements of balls in your board look like the arrangements of balls in the target board in the fewest possible moves.';
          break;
      }
      break;
    case 11:
      switch(getLanguage()) {
        case "fr":
          translated_text = 'Vous aurez parfois à déplacer une boule vers un autre piquet pour accéder à la boule qui est dessous.'
            + ' Il est important de vous rappeler que vous devez chercher à effectuer le <strong>moins de mouvements possible</strong> pour atteindre la configuration Objectif.'
            + " Vous avez 2 minutes par problème mais essayez d'aller aussi vite que vous le pouvez sans pénaliser la qualité de la solution.";
          break;
        default:
          translated_text = 'Sometime you will have to move a ball to a different peg in order to get to the ball below it.'
            + ' During this task it is important that you remember, you want the <strong>fewest possible moves</strong> that are required to make your board look like the target board.'
            + ' You will have 2 minutes on each problem to make your decision but try to go as fast as you want without impacting the quality of the solution.';
          break;
      }
      break;
    case 12:
      switch(getLanguage()) {
        case "fr":
          translated_text = 'Voici un exemple. Remarquez que les boules de Votre Plateau sont positionnées différemment du Plateau Objectif.'
            + ' Si vous déplacez la boule rouge du premier piquet de Votre Plateau vers le troisième piquet, alors il sera identique au Plateau Objectif.';
          break;
        default:
          translated_text = 'Here is an example. Notice that the balls in your board are in a different arrangement than in the target board.'
            + ' If we move the red ball from the first peg in your board to the third peg then it would look like the target board.';
          break;
      }
      break;
    case 13:
      switch(getLanguage()) {
        case "fr":
          translated_text = 'Au cours de ce test, vous allez déplacer les boules de Votre Plateau en cliquant sur les piquets. Quand vous cliquez sur un piquet, la boule supérieure se déplace vers la boîte représentant "votre main".'
          + ' Quand vous cliquez ensuite sur un autre piquet, la boule qui est dans "votre main" se déplace vers le sommet de ce piquet.</p>'
          + ' <p class = block-text>Si vous sélectionnez un piquet sans boule ou essayez de placer une boule sur un piquet déjà plein, rien ne se passera.'
          + ' Si vous réussissez à rendre Votre Plateau identique au Plateau Objectif, le problème est résolu et vous passez au suivant.</p>'
          + ' <p class = block-text>Démarrons avec un exemple simple pour que vous puissiez vous familiariser avec l\'interface.';
          break;
        default:
          translated_text = "During the test you will move the balls on your board by clicking on the pegs. When you click on a peg, the top ball will move into a box called 'your hand'."
            + " When you click on another peg, the ball in 'your hand' will move to the top of that peg.</p>"
            + "<p class = block-text>If you try to select a peg with no balls or try to place a ball on a full peg, nothing will happen."
            +" If you successfully make your board look like the target board, the trial will end and you will move to the next problem.</p>"
            + "<p class = block-text>We will start with an easy example so that you can learn the controls.";
          break;
      }
      break;
    case 14:
      switch(getLanguage()) {
        case "fr":
          translated_text = 'Nous allons démarrer le Problème n° 1. Il y aura ';
          break;
        default:
          translated_text = 'We will now start Problem 1. There will be ';
          break;
      }
      break;
    case 15:
      switch(getLanguage()) {
        case "fr":
          translated_text = ' problèmes à résoudre.<br>';
          break;
        default:
          translated_text = ' problems to complete.<br>';
          break;
      }
      break;
  }
  return translated_text;
}

var feedback_instruct_code = 0;

function getInstructText(code) {
  var feedback_instruct_text;
  switch(code) {
    case 0:
      switch(getLanguage()) {
        case "fr":
          feedback_instruct_text = 'Ce test durera environ 10 minutes.<br>' + getTranslatedText(0);
          break;
        default:
          feedback_instruct_text = 'This test will take about 10 minutes.<br>' + getTranslatedText(0);
          break;
      }
      break;
    case 1:
      switch(getLanguage()) {
        case "fr":
          feedback_instruct_text = 'Vous avez lu les consignes trop rapidement. Merci de prendre votre temps pour bien les comprendre. ' + getTranslatedText(1);
          break;
        default:
          feedback_instruct_text = 'Read through instructions too quickly.  Please take your time and make sure you understand the instructions. ' + getTranslatedText(1);
          break;
      }
      break;
    case 2:
      switch(getLanguage()) {
        case "fr":
          feedback_instruct_text = 'Fin des consignes. ' + getTranslatedText(1);
          break;
        default:
          feedback_instruct_text = 'Done with instructions. ' + getTranslatedText(1);
          break;
      }
      break;
  }
  return feedback_instruct_text;
}

/* Seven TOL Task performance scores were computed (Berg et al., 2010):
- total move score, total correct score, rule violation score, time violation score, total initial time, total executive time,
  and total planning-solving time based upon the TOL Task technical manual (Culbertson & Zillmer, 2005).
Total move score is the number of actual bead moves minus the minimum number of solution moves for each problem.
When a participant exceeded 20 moves or a problem was not solved within 2 min, 20 moves was set as a maximal move score to
avoid the inflation of total move scores and to limit frustration for the participants. Total correct score is the number of
problems solved in which only the minimum number of moves was used.
A time violation score was recorded when the participants failed to complete a problem within 1 min
Source : https://libres.uncg.edu/ir/uncg/f/J_Etnier_Effects_2011.pdf and http://www.toldx.com/faq.htm
*/
function computeScores() {
  var experiment_data = jsPsych.data.getTrialsOfType('poldrack-single-stim'); // get data from feedback_block
  var trial_count = 0;
  var initial_time_array = [];
  var execution_time_array = [];
  var extra_moves_array = [];
  var solved_count = 0;
  var correct_count = 0;
  var time_violation_count = 0;

  for (var i = 0; i < experiment_data.length; i++) {
    if (experiment_data[i].trial_id === 'feedback' && experiment_data[i].exp_stage === 'test') {
      trial_count += 1;
      initial_time_array.push(experiment_data[i].initial_time);
      execution_time_array.push(experiment_data[i].execution_time);
      if (experiment_data[i].time_violation) {
        time_violation_count++;
      }
      var num_moves_made = math.min(20, experiment_data[i].solved ? experiment_data[i].num_moves_made : 20);
      var extra_moves = num_moves_made - experiment_data[i].min_moves;
      extra_moves_array.push(extra_moves);
      if (experiment_data[i].solved) {
        solved_count++;
        if (extra_moves == 0) {
          correct_count++;
        }
      }
    }
  }
  var scores = {
    trial_count: trial_count,
    total_solved_score: solved_count,
    total_correct_score: correct_count,
    total_move_score: math.sum(extra_moves_array),
    total_initial_time: Math.round(math.sum(initial_time_array)/1000),
    total_execution_time: Math.round(math.sum(execution_time_array)/1000),
    total_planning_solving_time: Math.round((math.sum(initial_time_array)+math.sum(execution_time_array))/1000),
    time_violations: time_violation_count
  }
  return scores;
}

function getScoresPercentiles(scores) {
  // Normative data from https://www.researchgate.net/publication/225085698_Spanish_normative_studies_in_young_adults_NEURONORMA_young_adults_project_Norms_for_Stroop_Color-Word_Interference_and_Tower_of_London-Drexel_University_tests
  var scaled_scores = [ [0, 1], [1], [2], [3, 5], [6, 10], [11, 18], [19, 28], [29, 40], [41, 59], [60, 71], [72, 81], [82, 89], [90, 94], [95, 97], [98], [99], [99, 100] ];
  var total_correct_distribution = [ [0], [0], [0], [0], [1], [2], [2], [3], [4], [5], [6], [7], [8], [8], [9], [9], [10] ];
  var total_moves_distribution = [ [83, 200], [78, 82], [66, 77], [58, 65], [50, 57], [45, 49], [38, 44], [30, 37], [23, 29], [20, 22], [14, 19], [10, 13], [8, 9], [5, 7], [3, 4], [1, 2], [0, 0] ];
  var total_initial_time_distribution = [ [209, 1200], [185, 208], [166, 184], [144, 165], [112, 143], [95, 111], [81, 94], [59, 80], [39, 58], [33, 38], [26, 32], [22, 25], [19, 21], [17, 18], [14, 16], [13, 13], [0, 12] ];
  var total_execution_time_distribution = [ [498, 1200], [463, 497], [444, 462], [327, 443], [297, 326], [248, 296], [229, 247], [196, 228], [167, 195], [147, 166], [129, 146], [108, 128], [91, 107], [83, 90], [57, 82], [23, 56], [0, 22] ];
  var total_planning_solving_distribution = [ [556, 1200], [507, 555], [480, 506], [429, 479], [372, 428], [325, 371], [294, 324], [269, 293], [224, 268], [198, 223], [180, 197], [157, 179], [134, 156], [123, 133], [119, 122], [104, 118], [0, 103] ];

  var total_correct_index_min = 0;
  var total_correct_index_max = 0;
  var total_correct_percentile;
  var total_moves_percentile;
  var total_initial_time_percentile;
  var total_execution_time_percentile;
  var total_planning_solving_percentile;

  for (i = 0 ; i < 17 ; i++) {
    if (scores.total_correct_score === total_correct_distribution[i][0]) {
      if (total_correct_index_min === 0) {
        total_correct_index_min = i;
      }
      total_correct_index_max = i;
    }

    if (scores.total_move_score >= total_moves_distribution[i][0] && scores.total_move_score <= total_moves_distribution[i][1]) {
      total_moves_percentile = scaled_scores[i];
    }
    if (scores.total_initial_time >= total_initial_time_distribution[i][0] && scores.total_initial_time <= total_initial_time_distribution[i][1]) {
      total_initial_time_percentile = scaled_scores[i];
    }
    if (scores.total_execution_time >= total_execution_time_distribution[i][0] && scores.total_execution_time <= total_execution_time_distribution[i][1]) {
      total_execution_time_percentile = scaled_scores[i];
    }
    if (scores.total_planning_solving_time >= total_planning_solving_distribution[i][0] && scores.total_planning_solving_time <= total_planning_solving_distribution[i][1]) {
      total_planning_solving_percentile = scaled_scores[i];
    }
  }
  total_correct_percentile = [scaled_scores[total_correct_index_min][0], scaled_scores[total_correct_index_max][scaled_scores[total_correct_index_max].length-1]];
  if (total_correct_percentile[0] === total_correct_percentile[1]) {
    total_correct_percentile = [ total_correct_percentile[0] ];
  }

  var percentiles = {
    total_correct_percentile: total_correct_percentile,
    total_moves_percentile: total_moves_percentile,
    total_initial_time_percentile: total_initial_time_percentile,
    total_execution_time_percentile: total_execution_time_percentile,
    total_planning_solving_percentile: total_planning_solving_percentile
  }
  return percentiles;
}

function displayScores(scores, percentiles) {
  if (getLanguage() === "fr"){
    return   '<div class = centerbox>'
      + '<p class = center-block-text>Merci d\'avoir terminé ce test de la Tour de Londres DX !</p>'
      + '<p></p>'
      + '<p class = center-block-text>Vos scores sont :</p>'
      + '<ul>'
      + '<li>Nombre de Résolutions : ' + scores.total_solved_score + ' / ' + scores.trial_count + '</li>'
      + '<li>Nombre de Résolutions Optimales : ' + scores.total_correct_score + ' / ' + scores.trial_count + '<br>'
      + 'Vous avez fait mieux que ' + percentiles.total_correct_percentile[0] + (percentiles.total_correct_percentile.length > 1 ? (' à ' + percentiles.total_correct_percentile[1]) : '') + '% de la population active.</li>'
      + '<li>Total des Mouvements Excédentaires : ' + scores.total_move_score + '<br>'
      + 'Vous avez fait mieux que ' + percentiles.total_moves_percentile[0] + (percentiles.total_moves_percentile.length > 1 ? (' à ' + percentiles.total_moves_percentile[1]) : '') + '% de la population active.</li>'
      + '<li>Total du Temps de Planification (avant le 1er mouvement) : ' + scores.total_initial_time + '  s<br>'
      + 'Vous avez fait mieux que ' + percentiles.total_initial_time_percentile[0] + (percentiles.total_initial_time_percentile.length > 1 ? (' à ' + percentiles.total_initial_time_percentile[1]) : '') + '% de la population active'
      + ' mais prendre du temps pour la planification de la résolution n\'est pas nécessairement une mauvaise stratégie.</li>'
      + '<li>Total du Temps d\'Exécution (après le 1er mouvement): ' + scores.total_execution_time + ' s<br>'
      + 'Vous avez fait mieux que ' + percentiles.total_execution_time_percentile[0] + (percentiles.total_execution_time_percentile.length > 1 ? (' à ' + percentiles.total_execution_time_percentile[1]) : '') + '% de la population active.</li>'
      + '<li>Total du Temps de Résolution : ' + scores.total_planning_solving_time + ' s<br>'
      + 'Vous avez fait mieux que ' + percentiles.total_planning_solving_percentile[0] + (percentiles.total_planning_solving_percentile.length > 1 ? (' à ' + percentiles.total_planning_solving_percentile[1]) : '') + '% de la population active.</li>'
      + '<li>Dépassements de Temps (>1mn): ' + scores.time_violations + '</li>'
      + '</ul>'
      + '</div>';
  } else {
    return   '<div class = centerbox>'
      + '<p class = center-block-text>Thank you for completing this Tower of London DX test!</p>'
      + '<p></p>'
      + '<p class = center-block-text>Your scores are:</p>'
      + '<ul>'
      + '<li>Total Solved Score: ' + scores.total_solved_score + ' / ' + scores.trial_count + '</li>'
      + '<li>Total Correct (minimum moves) Score: ' + scores.total_correct_score + ' / ' + scores.trial_count + '<br>'
      + 'You did better than ' + percentiles.total_correct_percentile[0] + (percentiles.total_correct_percentile.length > 1 ? (' to ' + percentiles.total_correct_percentile[1]) : '') + '% of the working age population.</li>'
      + '<li>Total (extra) Move Score: ' + scores.total_move_score + '<br>'
      + 'You did better than ' + percentiles.total_moves_percentile[0] + (percentiles.total_moves_percentile.length > 1 ? (' to ' + percentiles.total_moves_percentile[1]) : '') + '% of the working age population.</li>'
      + '<li>Total Initial Time (before first move): ' + scores.total_initial_time + '  s<br>'
      + 'You were quicker than ' + percentiles.total_initial_time_percentile[0] + (percentiles.total_initial_time_percentile.length > 1 ? (' to ' + percentiles.total_initial_time_percentile[1]) : '') + '% of the working age population'
      + ' but taking time to plan the resolution isn\'t necessarily a bad strategy.</li>'
      + '<li>Total Execution Time (after first move): ' + scores.total_execution_time + ' s<br>'
      + 'You did better than ' + percentiles.total_execution_time_percentile[0] + (percentiles.total_execution_time_percentile.length > 1 ? (' to ' + percentiles.total_execution_time_percentile[1]) : '') + '% of the working age population.</li>'
      + '<li>Total Planning-Solving Time: ' + scores.total_planning_solving_time + ' s<br>'
      + 'You did better than ' + percentiles.total_planning_solving_percentile[0] + (percentiles.total_planning_solving_percentile.length > 1 ? (' to ' + percentiles.total_planning_solving_percentile[1]) : '') + '% of the working age population.</li>'
      + '<li>Time Violations (>1min): ' + scores.time_violations + '</li>'
      + '</ul>'
      + '</div>';
  }
}

var getStim = function() {
  var ref_board = makeBoard('your_board', curr_placement, 'ref')
  var target_board = makeBoard('peg_board', problems[problem_i])
  var canvas = '<div class = tol_canvas><div class="tol_vertical_line"></div></div>'
  var hold_box;
  if (held_ball !== 0) {
    ball = colors[held_ball - 1]
    hold_box = '<div class = tol_hand_box><div class = "tol_hand_ball tol_' + ball +
      '"><div class = tol_ball_label>' + ball[0] +
      '</div></div></div><div class = tol_hand_label><strong>' + getTranslatedText(2) + '</strong></div>'
  } else {
    hold_box =
      '<div class = tol_hand_box></div><div class = tol_hand_label><strong>' + getTranslatedText(2) + '</strong></div>'
  }
  return canvas + ref_board + target_board + hold_box
}

var getPractice = function() {
  var ref_board = makeBoard('your_board', curr_placement, 'ref')
  var target_board = makeBoard('peg_board', example_problem3)
  var canvas = '<div class = tol_canvas><div class="tol_vertical_line"></div></div>'
  var hold_box;
  if (held_ball !== 0) {
    ball = colors[held_ball - 1]
    hold_box = '<div class = tol_hand_box><div class = "tol_hand_ball tol_' + ball +
      '"><div class = tol_ball_label>' + ball[0] +
      '</div></div></div><div class = tol_hand_label><strong>' + getTranslatedText(2) + '</strong></div>'
  } else {
    hold_box =
      '<div class = tol_hand_box></div><div class = tol_hand_label><strong>' + getTranslatedText(2) + '</strong></div>'
  }
  return canvas + ref_board + target_board + hold_box
}

var getFB = function() {
  var data = jsPsych.data.getLastTrialData()
  var target = data.target
  var isequal = true
  solved = false
  for (var i = 0; i < target.length; i++) {
    isequal = arraysEqual(target[i], data.current_position[i])
    if (isequal === false) {
      break;
    }
  }
  var feedback;
  if (isequal === true) {
    feedback = getTranslatedText(3)
    solved = true
  } else {
    feedback = getTranslatedText(4)
  }
  var ref_board = makeBoard('your_board', curr_placement)
  var target_board = makeBoard('peg_board', target)
  var canvas = '<div class = tol_canvas><div class="tol_vertical_line"></div></div>'
  var feedback_box = '<div class = tol_feedbackbox><p class = center-text>' + feedback +
    '</p></div>'
  return canvas + ref_board + target_board + feedback_box
}


var getTime = function() {
  if ((time_per_trial - time_elapsed) > 0) {
    return time_per_trial - time_elapsed
  } else {
    return 1
  }

}

var getText = function() {
  return '<div class = centerbox><p class = center-block-text>' + getTranslatedText(5) + (problem_i + 2) +
    '. '  + getTranslatedText(0) + '</p></div>'
}

var pegClick = function(peg_id) {
  var choice = Number(peg_id.slice(-1)) - 1
  var peg = curr_placement[choice]
  var ball_location = 0
  if (held_ball === 0) {
    for (var i = peg.length - 1; i >= 0; i--) {
      if (peg[i] !== 0) {
        held_ball = peg[i]
        peg[i] = 0
        num_moves += 1
        break;
      }
    }
  } else {
    var open_spot = peg.indexOf(0)
    if (open_spot != -1) {
      peg[open_spot] = held_ball
      held_ball = 0
    }
  }
}

var makeBoard = function(container, ball_placement, board_type) {
  var board = '<div class = tol_' + container + '><div class = tol_base></div>'
  if (container == 'your_board') {
    board += '<div class = tol_board_label><strong>' + getTranslatedText(6) + '</strong></div>'
  } else {
    board += '<div class = tol_board_label><strong>' + getTranslatedText(7) + '</strong></div>'
  }
  for (var p = 0; p < 3; p++) {
    board += '<div id = tol_peg_' + (p + 1) + '><div class = tol_peg></div></div>' //place peg
      //place balls
    if (board_type == 'ref') {
      if (ball_placement[p][0] === 0 & held_ball === 0) {
        board += '<div id = tol_peg_' + (p + 1) + ' onclick = "pegClick(this.id)">'
      } else if (ball_placement[p].slice(-1)[0] !== 0 & held_ball !== 0) {
        board += '<div id = tol_peg_' + (p + 1) + ' onclick = "pegClick(this.id)">'
      } else {
        board += '<div class = special id = tol_peg_' + (p + 1) + ' onclick = "pegClick(this.id)">'
      }
    } else {
      board += '<div id = tol_peg_' + (p + 1) + ' >'
    }
    var peg = ball_placement[p]
    for (var b = 0; b < peg.length; b++) {
      if (peg[b] !== 0) {
        ball = colors[peg[b] - 1]
        board += '<div class = "tol_ball tol_' + ball + '"><div class = tol_ball_label>' + ball[0] +
          '</div></div>'
      }
    }
    board += '</div>'
  }
  board += '</div>'
  return board
}
var arraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (var i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
}

// Adapted from https://sourceforge.net/p/pebl/code-0/HEAD/tree/trunk/battery/tol/TOL.pbl

function getColumn(matrix, j) {
	return matrix.map(function(value,index) { return value[j-1]; });
}

function M(matrix,i,j) {
    return matrix[i-1][j-1]
}

function getTOLDist(matrix,a,b,c,d)
{
    row = (a-1)* 6 + b;
    col = (c-1)* 6 + d;
    return M(matrix, row, col)
}


function assembleTrial(a1,a2,b1,b2,space,dists) {
  dist = getTOLDist(dists,a1,a2,b1,b2);
  //console.log(a1+""+a2 + " -> " + b1+""+b2 + ' : dist = ' + dist);
  return [ M(space, a1, a2).map(function(arr) { return arr.slice(); }), M(space, b1, b2).map(function(arr) { return arr.slice(); }), dist, a1+""+a2, b1+""+b2 ]
}

// Computes the minimum distance between states, courtes of Fimbel http://sites.google.com/site/tolspace/
function stateDist() {
   state = [[0,1,1,2,2,3,4,3,3,3,2,3,6,6,5,4,5,4,7,6,7,8,7,8,6,5,6,7,7,8,6,6,5,4,4,3],
    [1,0,1,2,2,3,3,3,2,2,1,2,5,5,4,3,4,3,6,5,6,7,6,7,6,5,6,7,7,8,6,6,5,4,4,3],
    [1,1,0,1,1,2,3,2,3,3,2,3,6,6,5,4,5,4,7,6,7,8,7,7,5,4,5,6,6,7,5,5,4,3,3,2],
    [2,2,1,0,1,2,3,2,3,4,3,4,7,7,6,5,6,5,8,7,8,7,7,6,4,3,4,5,5,6,4,4,3,3,2,1],
    [2,2,1,1,0,1,2,1,2,3,3,4,7,7,6,5,5,4,7,6,7,7,8,7,5,4,5,6,5,6,4,4,3,2,3,2],
    [3,3,2,2,1,0,3,2,3,4,4,5,8,8,7,6,6,5,8,7,7,6,7,6,4,3,4,5,4,5,3,3,2,1,2,3],
    [4,3,3,3,2,3,0,1,1,2,2,3,6,6,5,4,4,3,6,5,6,7,7,8,7,6,7,8,7,8,6,6,5,4,5,4],
    [3,3,2,2,1,2,1,0,1,2,2,3,6,6,5,4,4,3,6,5,6,7,7,8,6,5,6,7,6,7,5,5,4,3,4,3],
    [3,2,3,3,2,3,1,1,0,1,1,2,5,5,4,3,3,2,5,4,5,6,6,7,7,6,7,8,7,7,6,6,5,4,5,4],
    [3,2,3,4,3,4,2,2,1,0,1,2,4,4,3,3,2,1,4,3,4,5,5,6,8,7,8,7,7,6,7,7,6,5,6,5],
    [2,1,2,3,3,4,2,2,1,1,0,1,4,4,3,2,3,2,5,4,5,6,5,6,7,6,7,7,8,7,7,7,6,5,5,4],
    [3,2,3,4,4,5,3,3,2,2,1,0,3,3,2,1,2,3,4,3,4,5,4,5,8,7,7,6,7,6,8,8,7,6,6,5],
    [6,5,6,7,7,8,6,6,5,4,4,3,0,1,1,2,2,3,4,3,3,3,2,3,6,6,5,4,5,4,7,6,7,8,7,8],
    [6,5,6,7,7,8,6,6,5,4,4,3,1,0,1,2,2,3,3,3,2,2,1,2,5,5,4,3,4,3,6,5,6,7,6,7],
    [5,4,5,6,6,7,5,5,4,3,3,2,1,1,0,1,1,2,3,2,3,3,2,3,6,6,5,4,5,4,7,6,7,8,7,7],
    [4,3,4,5,5,6,4,4,3,3,2,1,2,2,1,0,1,2,3,2,3,4,3,4,7,7,6,5,6,5,8,7,8,7,7,6],
    [5,4,5,6,5,6,4,4,3,2,3,2,2,2,1,1,0,1,2,1,2,3,3,4,7,7,6,5,5,4,7,6,7,7,8,7],
    [4,3,4,5,4,5,3,3,2,1,2,3,3,3,2,2,1,0,3,2,3,4,4,5,8,8,7,6,6,5,8,7,7,6,7,6],
    [7,6,7,8,7,8,6,6,5,4,5,4,4,3,3,3,2,3,0,1,1,2,2,3,6,6,5,4,4,3,6,5,6,7,7,8],
    [6,5,6,7,6,7,5,5,4,3,4,3,3,3,2,2,1,2,1,0,1,2,2,3,6,6,5,4,4,3,6,5,6,7,7,8],
    [7,6,7,8,7,7,6,6,5,4,5,4,3,2,3,3,2,3,1,1,0,1,1,2,5,5,4,3,3,2,5,4,5,6,6,7],
    [8,7,8,7,7,6,7,7,6,5,6,5,3,2,3,4,3,4,2,2,1,0,1,2,4,4,3,3,2,1,4,3,4,5,5,6],
    [7,6,7,7,8,7,7,7,6,5,5,4,2,1,2,3,3,4,2,2,1,1,0,1,4,4,3,2,3,2,5,4,5,6,5,6],
    [8,7,7,6,7,6,8,8,7,6,6,5,3,2,3,4,4,5,3,3,2,2,1,0,3,3,2,1,2,3,4,3,4,5,4,5],
    [6,6,5,4,5,4,7,6,7,8,7,8,6,5,6,7,7,8,6,6,5,4,4,3,0,1,1,2,2,3,4,3,3,3,2,3],
    [5,5,4,3,4,3,6,5,6,7,6,7,6,5,6,7,7,8,6,6,5,4,4,3,1,0,1,2,2,3,3,3,2,2,1,2],
    [6,6,5,4,5,4,7,6,7,8,7,7,5,4,5,6,6,7,5,5,4,3,3,2,1,1,0,1,1,2,3,2,3,3,2,3],
    [7,7,6,5,6,5,8,7,8,7,7,6,4,3,4,5,5,6,4,4,3,3,2,1,2,2,1,0,1,2,3,2,3,4,3,4],
    [7,7,6,5,5,4,7,6,7,7,8,7,5,4,5,6,5,6,4,4,3,2,3,2,2,2,1,1,0,1,2,1,2,3,3,4],
    [8,8,7,6,6,5,8,7,7,6,7,6,4,3,4,5,4,5,3,3,2,1,2,3,3,3,2,2,1,0,3,2,3,4,4,5],
    [6,6,5,4,4,3,6,5,6,7,7,8,7,6,7,8,7,8,6,6,5,4,5,4,4,3,3,3,2,3,0,1,1,2,2,3],
    [6,6,5,4,4,3,6,5,6,7,7,8,6,5,6,7,6,7,5,5,4,3,4,3,3,3,2,2,1,2,1,0,1,2,2,3],
    [5,5,4,3,3,2,5,4,5,6,6,7,7,6,7,8,7,7,6,6,5,4,5,4,3,2,3,3,2,3,1,1,0,1,1,2],
    [4,4,3,3,2,1,4,3,4,5,5,6,8,7,8,7,7,6,7,7,6,5,6,5,3,2,3,4,3,4,2,2,1,0,1,2],
    [4,4,3,2,3,2,5,4,5,6,5,6,7,6,7,7,8,7,7,7,6,5,5,4,2,1,2,3,3,4,2,2,1,1,0,1],
    [3,3,2,1,2,3,4,3,4,5,4,5,8,7,7,6,7,6,8,8,7,6,6,5,3,2,3,4,4,5,3,3,2,2,1,0]];

    return state;
}

function problemSpace() {
 space = [  [ [[1,2,3],[0,0],[0]], [[1,2,0],[0,0],[3]], [[1,2,0],[3,0],[0]], [[1,0,0],[3,2],[0]], [[1,0,0],[3,0],[2]], [[0,0,0],[3,1],[2]] ],
            [ [[1,3,2],[0,0],[0]], [[1,3,0],[0,0],[2]], [[1,3,0],[2,0],[0]], [[1,0,0],[2,3],[0]], [[1,0,0],[2,0],[3]], [[0,0,0],[2,1],[3]] ],
            [ [[3,1,2],[0,0],[0]], [[3,1,0],[0,0],[2]], [[3,1,0],[2,0],[0]], [[3,0,0],[2,1],[0]], [[3,0,0],[2,0],[1]], [[0,0,0],[2,3],[1]] ],
            [ [[3,2,1],[0,0],[0]], [[3,2,0],[0,0],[1]], [[3,2,0],[1,0],[0]], [[3,0,0],[1,2],[0]], [[3,0,0],[1,0],[2]], [[0,0,0],[1,3],[2]] ],
            [ [[2,3,1],[0,0],[0]], [[2,3,0],[0,0],[1]], [[2,3,0],[1,0],[0]], [[2,0,0],[1,3],[0]], [[2,0,0],[1,0],[3]], [[0,0,0],[1,2],[3]] ],
            [ [[2,1,3],[0,0],[0]], [[2,1,0],[0,0],[3]], [[2,1,0],[3,0],[0]], [[2,0,0],[3,1],[0]], [[2,0,0],[3,0],[1]], [[0,0,0],[3,2],[1]] ]  ];

    return space;
}

// GetTrials : return an array of trials
// Each trial is an array of : start state, goal state, min-move, start state id, goal state id
function getTrials() {
    s = problemSpace();
    dists = stateDist();

    trials = [ // 3-moves
              //assembleTrial(6,3,5,3,s,dists),
              //assembleTrial(6,3,1,5,s,dists),
              //assembleTrial(6,3,5,4,s,dists),

              // 4-moves
              assembleTrial(6,3,1,3,s,dists),
              //assembleTrial(6,3,4,4,s,dists),
              assembleTrial(6,3,4,6,s,dists),

              // 5-moves
              assembleTrial(6,3,4,5,s,dists),
              assembleTrial(6,3,1,2,s,dists),
              assembleTrial(6,3,4,3,s,dists),

              // 6-moves
              assembleTrial(6,3,2,4,s,dists),
              assembleTrial(6,3,4,2,s,dists),
              assembleTrial(6,3,2,5,s,dists),

              // 7-moves
              assembleTrial(6,3,3,3,s,dists),
              //assembleTrial(6,3,3,1,s,dists),
              assembleTrial(6,3,3,5,s,dists)
	];

	return trials;
}

/* ************************************ */
/* Define experimental variables */
/* ************************************ */
// generic task variables
var sumInstructTime = 0 //ms
var instructTimeThresh = 0 ///in seconds
var credit_var = true

// task specific variables
var solved = false
var exp_stage = 'practice'
var colors = ['Green', 'Red', 'Blue']
var problem_i = 0
var time_per_trial = 120000 //time per trial in seconds // MOD : 20000 -> 120000
var time_elapsed = 0 //tracks time for a problem
var initial_time = 0 //time before first move // MOD
var time_violation_limit = 60000 // nominal time // MOD
var num_moves = 0 //tracks number of moves for a problem
  /*keeps track of peg board (where balls are). Lowest ball is the first value for each peg.
  So the initial_placement has the 1st ball and 2nd ball on the first peg and the third ball on the 2nd peg.
  */
  // make Your board
var curr_placement = [
  [1, 2, 0],
  [3, 0],
  [0]
]
var example_problem1 = [
  [1, 2, 0],
  [0, 0],
  [3]
]
var example_problem2 = [
  [1, 0, 0],
  [3, 0],
  [2]
]
var example_problem3 = [
  [1, 0, 0],
  [3, 2],
  [0]
]
var ref_board = makeBoard('your_board', curr_placement)

// MOD : get start boards, problesm and answers from trials matrix
var trials = getTrials();

var start_boards = getColumn(trials, 1);
var problems = getColumn(trials, 2);
var answers = getColumn(trials, 3);

var held_ball = 0

/* ************************************ */
/* Set up jsPsych blocks */
/* ************************************ */
//Set up post task questionnaire
var post_task_block = { // MOD : nore more used
   type: 'survey-text',
   data: {
       trial_id: "post task questions"
   },
   questions: ['<p class = center-block-text style = "font-size: 20px">Please summarize what you were asked to do in this task.</p>',
              '<p class = center-block-text style = "font-size: 20px">Do you have any comments about this task?</p>'],
   rows: [15, 15],
   columns: [60,60]
};

/* define static blocks */
var end_block = {
  type: 'poldrack-text',
  data: {
    trial_id: "end",
    exp_id: 'tower_of_london_dx2'
  },
  timing_response: 600000,
  text: function() {
    var scores = computeScores();
    var percentiles = getScoresPercentiles(scores)
    save_data(subject_id, experiment_names[0], { subject: subject_id, test_time: new Date(), test_scores: scores, test_percentiles: percentiles, test_data: jsPsych.data.getData() }); // TODO
	  return displayScores(scores, percentiles);
  },
  cont_key: [13],
  timing_post_trial: 0,
  // on_finish: assessPerformance // MOD
};

var feedback_instruct_block = {
  type: 'poldrack-text',
  data: {
    trial_id: "instruction"
  },
  cont_key: [13],
  text: function() { return '<div class = centerbox><p class = center-block-text>' + getInstructText(feedback_instruct_code) + '</p></div>' },
  timing_post_trial: 0,
  timing_response: 180000
};

function getInstructionPages() {
  return [
    '<div class = tol_topbox><p class = block-text>' + getTranslatedText(8) + '</p></div>' +
    makeBoard('your_board', curr_placement) + makeBoard('peg_board', example_problem1) +
    '<div class = tol_bottombox><p class = block-text>' + getTranslatedText(9) + '</p></div>',
    '<div class = tol_topbox><p class = block-text>' + getTranslatedText(10) + '</p></div>' +
    makeBoard('your_board', curr_placement) + makeBoard('peg_board', example_problem1) +
    '<div class = tol_bottombox><p class = block-text>' + getTranslatedText(11) + '</p></div>',
    '<div class = tol_topbox><p class = block-text>' + getTranslatedText(12) + '</p></div>' +
    makeBoard('your_board', curr_placement) + makeBoard('peg_board', example_problem2) + '<div class = tol_bottombox></div>',
    '<div class = centerbox><p class = block-text>' + getTranslatedText(13) + '</p></div>'
  ]
}

/// This ensures that the subject does not read through the instructions too quickly.  If they do it too quickly, then we will go over the loop again.
var instructions_block = {
  type: 'poldrack-instructions',
  data: {
    trial_id: "instruction"
  },
  pages: getInstructionPages,
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 1000,
  language: function() { return getLanguage() }
};

var instruction_node = {
  timeline: [feedback_instruct_block, instructions_block],
  /* This function defines stopping criteria */
  loop_function: function(data) {
    for (i = 0; i < data.length; i++) {
      if ((data[i].trial_type == 'poldrack-instructions') && (data[i].rt != -1)) {
        rt = data[i].rt
        sumInstructTime = sumInstructTime + rt
      }
    }
    if (sumInstructTime <= instructTimeThresh * 1000) {
      feedback_instruct_code = 1
      return true
    } else if (sumInstructTime > instructTimeThresh * 1000) {
      feedback_instruct_code = 2
      return false
    }
  }
}


var start_test_block = {
  type: 'poldrack-text',
  data: {
    trial_id: "instruction"
  },
  timing_response: 180000,
  text: function() { return '<div class = centerbox><p class = block-text>' + getTranslatedText(14) +
    problems.length + getTranslatedText(15) + getTranslatedText(0) + '</p></div>' },
  cont_key: [13],
  timing_post_trial: 1000,
  on_finish: function() {
    exp_stage = 'test'
    held_ball = 0
    time_elapsed = 0
    initial_time =  0 // MOD
    num_moves = 0;
    curr_placement = jQuery.extend(true, [], start_boards[problem_i]) // MOD : was hard coded
  }
};

var advance_problem_block = {
  type: 'poldrack-text',
  data: {
    trial_id: "advance",
    exp_stage: 'test'
  },
  timing_response: 180000,
  text: getText,
  cont_key: [13],
  on_finish: function() {
    held_ball = 0
    time_elapsed = 0
    initial_time = 0 // MOD
    problem_i += 1;
    num_moves = 0;
    curr_placement = jQuery.extend(true, [], start_boards[problem_i]) // MOD : was hard coded
  }
}

var practice_tohand = {
  type: 'single-stim-button',
  stimulus: getPractice,
  button_class: 'special',
  is_html: true,
  data: {
    trial_id: "to_hand",
    exp_stage: 'practice'
  },
  timing_stim: getTime,
  timing_response: getTime,
  timing_post_trial: 0,
  on_finish: function(data) {
    if (data.mouse_click != -1) {
      time_elapsed += data.rt
    } else {
      time_elapsed += getTime()
    }
    jsPsych.data.addDataToLastTrial({
      'current_position': jQuery.extend(true, [], curr_placement),
      'num_moves_made': num_moves,
      'target': example_problem3,
      'min_moves': 1,
      'problem_id': 'practice'
    })
  }
}

var practice_toboard = {
  type: 'single-stim-button',
  stimulus: getPractice,
  button_class: 'special',
  is_html: true,
  data: {
    trial_id: "to_board",
    exp_stage: 'practice'
  },
  timing_stim: getTime,
  timing_response: getTime,
  timing_post_trial: 0,
  on_finish: function(data) {
    if (data.mouse_click != -1) {
      time_elapsed += data.rt
    } else {
      time_elapsed += getTime()
    }
    jsPsych.data.addDataToLastTrial({
      'current_position': jQuery.extend(true, [], curr_placement),
      'num_moves_made': num_moves,
      'target': example_problem3,
      'min_moves': 1,
      'problem_id': 'practice'
    })
  }
}

var test_tohand = {
  type: 'single-stim-button',
  stimulus: getStim,
  button_class: 'special',
  is_html: true,
  data: {
    trial_id: "to_hand",
    exp_stage: 'test'
  },
  timing_stim: getTime,
  timing_response: getTime,
  timing_post_trial: 0,
  on_finish: function(data) {
    if (data.mouse_click != -1) {
      time_elapsed += data.rt
    } else {
      time_elapsed += getTime()
    }
    if (initial_time == 0) { // MOD
        initial_time = time_elapsed
    }
    jsPsych.data.addDataToLastTrial({
      'current_position': jQuery.extend(true, [], curr_placement),
      'num_moves_made': num_moves,
      'target': problems[problem_i],
      'min_moves': answers[problem_i],
      'problem_id': problem_i + 1
    })
  }
}

var test_toboard = {
  type: 'single-stim-button',
  stimulus: getStim,
  button_class: 'special',
  is_html: true,
  data: {
    trial_id: "to_board",
    exp_stage: 'test'
  },
  timing_stim: getTime,
  timing_response: getTime,
  timing_post_trial: 0,
  on_finish: function(data) {
    if (data.mouse_click != -1) {
      time_elapsed += data.rt
    } else {
      time_elapsed += getTime()
    }
    jsPsych.data.addDataToLastTrial({
      'current_position': jQuery.extend(true, [], curr_placement),
      'num_moves_made': num_moves,
      'target': problems[problem_i],
      'min_moves': answers[problem_i],
      'problem_id': problem_i + 1
    })
  }
}

var feedback_block = {
  type: 'poldrack-single-stim',
  stimulus: getFB,
  choices: 'none',
  is_html: true,
  data: {
    trial_id: 'feedback'
  },
  timing_stim: 2000,
  timing_response: 2000,
  timing_post_trial: 500,
  on_finish: function() {
    jsPsych.data.addDataToLastTrial({
      'exp_stage': exp_stage,
      'problem_id': problem_i + 1,
      'start': jQuery.extend(true, [], start_boards[problem_i]), // MOD : was curr_placement
      'target': problems[problem_i], // MOD
      'initial_time': initial_time, // MOD
      'execution_time': time_elapsed - initial_time, // MOD
      'time_violation' : time_elapsed > time_violation_limit , // MOD
      'solved': solved,
      'min_moves': answers[problem_i], // MOD
      'num_moves_made': num_moves // MOD
    })
  },
}

var practice_node = {
  timeline: [practice_tohand, practice_toboard],
  loop_function: function(data) {
    if (time_elapsed >= time_per_trial) {
        return false
    }
    data = data[1]
    var target = data.target
    var isequal = true
    for (var i = 0; i < target.length; i++) {
      isequal = arraysEqual(target[i], data.current_position[i])
      if (isequal === false) {
        break;
      }
    }
    return !isequal
  },
  timing_post_trial: 1000
}

var problem_node = {
  timeline: [test_tohand, test_toboard],
  loop_function: function(data) {
    if (time_elapsed >= time_per_trial) {
        return false
    }
    data = data[1]
    var target = data.target
    var isequal = true
    for (var i = 0; i < target.length; i++) {
      isequal = arraysEqual(target[i], data.current_position[i])
      if (isequal === false) {
        break;
      }
    }
    return !isequal
  },
  timing_post_trial: 1000
}

/* create experiment definition array */
var tower_of_london_dx2_experiment = [];
tower_of_london_dx2_experiment.push(instruction_node);
tower_of_london_dx2_experiment.push(practice_node);
tower_of_london_dx2_experiment.push(feedback_block);
tower_of_london_dx2_experiment.push(start_test_block);
for (var i = 0; i < problems.length; i++) {
  tower_of_london_dx2_experiment.push(problem_node);
  tower_of_london_dx2_experiment.push(feedback_block);
  if (i != problems.length-1) {
    tower_of_london_dx2_experiment.push(advance_problem_block);
  }
}
//tower_of_london_dx2_experiment.push(post_task_block) // MOD : remove survey
tower_of_london_dx2_experiment.push(end_block);
