    
/*For cursor*/
            const cursor = document.querySelector('#cursor');
            const cursorCircle = cursor.querySelector('.cursor__circle');

            const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
            const pos = { x: 0, y: 0 }; // cursor's coordinates
            const speed = 0.2; // between 0 and 1

            const updateCoordinates = e => {
              mouse.x = e.clientX;
              mouse.y = e.clientY;
            }

            window.addEventListener('mousemove', updateCoordinates);


            function getAngle(diffX, diffY) {
              return Math.atan2(diffY, diffX) * 180 / Math.PI;
            }

            function getSqueeze(diffX, diffY) {
              const distance = Math.sqrt(
                Math.pow(diffX, 2) + Math.pow(diffY, 2)
              );
              const maxSqueeze = 0.1;
              const accelerator = 2000;
              return Math.min(distance / accelerator, maxSqueeze);
            }


            const updateCursor = () => {
              const diffX = Math.round(mouse.x - pos.x);
              const diffY = Math.round(mouse.y - pos.y);

              pos.x += diffX * speed;
              pos.y += diffY * speed;

              const angle = getAngle(diffX, diffY);
              const squeeze = getSqueeze(diffX, diffY);

              const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
              const rotate = 'rotate(' + angle +'deg)';
              const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

              cursor.style.transform = translate;
              cursorCircle.style.transform = rotate + scale;
            };

            function loop() {
              updateCursor();
              requestAnimationFrame(loop);
            }

            requestAnimationFrame(loop);



            const cursorModifiers = document.querySelectorAll('[cursor-class]');

            cursorModifiers.forEach(curosrModifier => {
              curosrModifier.addEventListener('mouseenter', function() {
                const className = this.getAttribute('cursor-class');
                cursor.classList.add(className);
              });

              curosrModifier.addEventListener('mouseleave', function() {
                const className = this.getAttribute('cursor-class');
                cursor.classList.remove(className);
              });
            });

            $(".hv-cursor").mouseenter(function(){
                $("#cursor").addClass("hv-me");
            });
            $(".hv-cursor").mouseleave(function(){
                $("#cursor").removeClass("hv-me");
            });

            $(".hv-big").mouseenter(function(){
                $("#cursor").addClass("hv-big");
            });
            $(".hv-big").mouseleave(function(){
                $("#cursor").removeClass("hv-big");
            });

            $(".hv-sm").mouseenter(function(){
                $("#cursor").addClass("hv-sm");
            });
            $(".hv-sm").mouseleave(function(){
                $("#cursor").removeClass("hv-sm");
            });

            $(".hv-md").mouseenter(function(){
                $("#cursor").addClass("hv-md");
            });
            $(".hv-md").mouseleave(function(){
                $("#cursor").removeClass("hv-md");
            });
            
            $(".hv-white").mouseenter(function(){
                $("#cursor").addClass("hv-white");
            });
            $(".hv-white").mouseleave(function(){
                $("#cursor").removeClass("hv-white");
            });
            
/*END CURSOR*/
    