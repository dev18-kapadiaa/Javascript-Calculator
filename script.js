const actions = document.querySelector('.actions');
const ans = document.querySelector('.ans');
	
	//console.log(actions);
	//console.log(ans);
	var expression = '';
	//let a=0;
    var mem=0;
	actions.addEventListener('click', (e) => {
		//console.log(e.target);
		const value = e.target.dataset['value'];

		if(value !== undefined) {
			// I'm good to go.
			if(value == 'ce') {
				expression = '';
				ans.value = 0;
				return true;
			}

            else if(value== 'clear-one'){
                expression= expression.substring(0,expression.length-1);
            }
          
            else if(value== 'memory-store'){
        
                mem = parseFloat(ans.value);
              
                ans.value=0;
            }
            else if(value== 'memory-recall'){
                
                expression = parseFloat(mem);
            }

            else if(value == 'memory-add'){
                mem = mem + parseFloat(ans.value);
                expression =mem;
            }
            else if(value == 'memory-sub'){
                mem = mem - parseFloat(ans.value);
                expression=mem;
            }
            else if(value == 'memory-clear'){
                mem= 0;
            }
            
			else if(value == 'x^2'){
				expression =square();
			}
            else if(value =='modulus'){
                expression= Math.abs(expression);
            }
			
			else if(value == 'radic'){
				expression = Math.sqrt(expression);
			}
			else if(value == 'log'){
				//expression = Math.log10(expression);
                expression = logManual(expression,10);
			}
            else if(value=='ln'){
                expression=Math.log(expression);
               
            }
            else if(value=='exponent'){
                expression = Math.pow(2.7182818284,expression);
            }
			else if(value == 'sin'){
				expression = Math.sin(expression);
			}
			else if(value == 'cos'){
				expression = Math.cos(expression);
			}
			else if(value == 'tan'){
				expression = Math.tan(expression);
			}
            else if(value == 'power10'){
                expression = Math.pow(10,expression);
            }
            else if(value =='cube-root'){
                expression = Math.cbrt(expression);
            }

            else if(value=='factorial'){
                expression = fact(expression);
            }
            else if(value =='inv'){
                expression = 1/expression;
            }
          
            

			else if(value == '=') {
				const answer = eval(expression);
                
                
				expression = answer;
                
				
			} 
              else {
				expression += value;
			}

			if(expression == undefined) {
				expression = '';
				ans.value = 0;
			} else {
				ans.value = expression;
			}
			// expression += value;


		}

	});
	function square() {
			return eval(expression*expression);
	}
    const fact = (expression)=>{
        let answer = 1;
        if (expression == 0 || expression == 1){
          return answer;
        }
        else if(expression > 1){
          for(var i = expression; i >= 1; i--){
            answer = answer * i;
          }
          return answer;
        }
        else{
            return "number has to be positive."
          }  
    }


 /*   function log(expression,b) {
       // expression = Math.parseFloat(expression);
       
        var b = 10;
        if(expression<10){
        return 0;
        }

    return 1 + log(expression/10.0, 10);

    }
 
*/



                                                                        /* Alternative - 2 for logarithm */
function ln(expression){
    
    return 99999999*(expression**(1/99999999)-1)
}
function logManual(expression,b=10){
    result = ln(expression)/ln(b);
    return result;
}

