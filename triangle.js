var Triangle = function(num1, num2, num3) {
	this.cote1 = num1;
	this.cote2 = num2;
	this.cote3 = num3;
	this.illegal = function () {
			return (this.cote1 === 0 || this.cote2 === 0 || this.cote3 === 0 )

			|| (this.cote1 + this.cote2 < this.cote3 || 
				this.cote2 + this.cote3 < this.cote1 || 
				this.cote3 + this.cote1 < this.cote2 )
		}
	this.kind = function(){
		if (this.illegal()) {
			throw new TypeError('erreur') 
		}
		else if (num1 === num2 && num2 === num3) {
			return 'equilateral'
		}
		else if(num1 === num2 || num1 === num3 || num2 === num3) {
			return 'isosceles'
		}
		else {
			return 'scalene'
		}
		
	}
}

module.exports = Triangle;