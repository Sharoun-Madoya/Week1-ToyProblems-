// confirms whether marks entered are valid or invalid and range within the given values  

function studentMarks (studentGrading ) {
    return  (averageMarks = 100<= studentGrading >= 0);


// turns the marks enter into a valid grade as a result
function studentGrading (averageMarks) {
    if (averageMarks > 100 || averageMarks > 79 ){
        return "A";
    } 
    else if (averageMarks >=60 ){
        return "B";
    }
    else if (averageMarks >=49 ){
        return "C";
    }
    else if (averageMarks >=40){
        return "D";
    }
    else if (averageMarks >=0){
        return "E";
    }
}
}
