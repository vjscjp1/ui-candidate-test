/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/

module( "Reverse String Unit Test" );
test( "Reverse String Test", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' ); 

    ok( reverseString( "foo" ), 'oof', 'Expected oof as the result, the result was: ' + divide( "foo" ) );
});

module( "Min Number Unit Test" );
test( "Min Number Test", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

    ok( findMinValue( [2, 1, 2.5, 8] ), 1, 'Expected 1 as the result, the result was: ' + findMinValue( [2, 1, 2.5, 8] ) );
});

module( "Remove Duplicates Unit Test" );
test( "Remove Duplicates Test", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

    ok( findDistinctValues( [2, 1, 2.5, 2] ).length, 3, 'Expected 3 as the result, the result was: ' + findMinValue( [2, 1, 2.5, 8] ).length );
});

module( "Remove fruits Unit Test" );
test( "Remove fruits Test", 3, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

    ok( removeFruits( ['Orange', 'Mango', 'Kiwi'], ['Kiwi'] ).length, 2, 'Expected 2 as the result, the result was: ' + removeFruits( ['Orange', 'Mango', 'Kiwi'], ['Kiwi'] ).length );
    
    ok( removeFruits( ['Orange', 'Mango', 'Kiwi'], ['Grape'] ).length, 3, 'Expected 3 as the result, the result was: ' + removeFruits( ['Orange', 'Mango', 'Kiwi'], ['Grape'] ).length );
});

module( "Push Onto Array Unit Test" );
test( "Push Onto Array Test", 3, function() {
    var array = [0, 1, 2, 3],
        toPush;
    
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 
    
    toPush = 4;
    pushOntoArray(array, toPush);
    ok( array.length, 5, 'Expected 5 as the result, the result was: ' + array.length );

    toPush = [5, 6];
    pushOntoArray(array, toPush);
    ok( array.length, 7, 'Expected 7 as the result, the result was: ' + array.length );
});

module( "Split String With Comma Unit Test" );
test( "Split String With Comma Test", 3, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 
    
    ok( splitListStrUsingComma('a,b,c').length, 3, 'Expected 3 as the result, the result was: ' + splitListStrUsingComma('a,b,c').length );

    strictEqual( splitListStrUsingComma('').length, 0, 'Expected 0 as the result, the result was: ' + splitListStrUsingComma('').length );
});

module( "Sum Unit Test" );
test( "Sum Test", 2, function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 

    ok( sum(1, 2, 3), 6, 'Expected 6 as the result, the result was: ' + sum(1, 2, 3) );
});

module( "Only White Space Unit Test" );
test( "Only White Space Test", 3, function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' ); 

    strictEqual( isOnlyWhitespace("  "), true, 'Expected true as the result, the result was: ' + isOnlyWhitespace("  ") );
    
    strictEqual( isOnlyWhitespace("a b"), false, 'Expected false as the result, the result was: ' + isOnlyWhitespace("a b ") );
});