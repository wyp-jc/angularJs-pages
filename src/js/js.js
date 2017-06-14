var app=angular.module('myapp',[])
		app.service("data",function(){
			return [
				{"con":'no.1'},
				{"con":'no.2'},
				{"con":'no.3'},
				{"con":'no.4'},
				{"con":'no.5'},
				{"con":'no.6'},
				{"con":'no.7'},
				{"con":'no.8'},
				{"con":'no.9'},
				{"con":'no.10'},
				{"con":'no.11'},
				{"con":'no.12'},
				{"con":'no.13'},
				{"con":'no.14'},
				{"con":'no.15'},
				{"con":'no.16'},
				{"con":'no.17'}
			]
		})
		app.controller("mycontroller",function($scope,data){
			$scope.data=data;
			$scope.option={
				cur:1,//当前页数
				all:data.length,//总页数
				showPage:5//显示的页数
			}
			$scope.page=getPage($scope.option.cur,$scope.option.all,$scope.option.showPage)
			$scope.getCur=function(i){
				if(i=='下一页'){
					i = parseInt($scope.option.cur) + 1;
				}else if(i=="上一页"){
					i = parseInt($scope.option.cur) - 1;
				}
				if(i<1){
					i=1
				}else if(i>$scope.option.all){
					i=$scope.option.all
				}
				if (i == $scope.option.curr) return;
				 $scope.option.cur = i
				 $scope.page=getPage($scope.option.cur,$scope.option.all,$scope.option.showPage)
				 console.log($scope.page)
				 console.log($scope.option.cur)
			}
			function getPage(cur,all,showPage){
				var page=[];
				page.push('上一页')
				var start=cur-Math.floor(showPage/2);
				var end=cur+Math.floor(showPage/2)+(showPage%2)-1
				
				if(start<1){
					start=1
					end=start+showPage-1
				}
				if(end>all){
					end=all
					start=end-showPage+1
				}
				if(start>1){
					page.push(1)
				}
				if(start>=Math.floor(showPage/2)){
					if(start!=2)page.push('...')
				}
				if(end==all){
					end=all-1
				}
				for(var i=start;i<=end;i++){
					page.push(i)
				}
				if(end<=all-Math.floor(showPage/2)){
					page.push('....')
				}
				page.push(all)
				page.push('下一页')
				return page
			}
		})