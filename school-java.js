$(document).ready(function () {
    // 1. Menu-ka weyn ee Mobile-ka (Hamburger Toggle)
    // Waxaan isticmaalaynaa class-ka .menu-btn ama id-ga aad u bixisay badhanka
    $(".menu-btn").on("click", function (e) {
        e.preventDefault();
        $(".sidebar").toggleClass("active");
        
        // Bedel qoraalka badhanka haddii loo baahdo
        if ($(".sidebar").hasClass("active")) {
            $(this).text("✕");
        } else {
            $(this).text("☰");
        }
    });

    // 2. Dropdown-ka FORMS (id="hello")
    $("#hello").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation(); // Jooji in click-ku u gudbo Sidebar-ka
        $("#hello1").stop().slideToggle(300); // Menu-ga hoose ee Forms
        
        // Haddii aad REPORTS furan tahay, xir (Optional - waayo waa nidaam nadiif ah)
        $("#hi1").slideUp(200);
    });

    // 3. Dropdown-ka REPORTS (id="hi")
    $("#hi").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#hi1").stop().slideToggle(300); // Menu-ga hoose ee Reports
        
        // Haddii aad FORMS furan tahay, xir
        $("#hello1").slideUp(200);
    });

    // 4. Inuu Sidebar-ku xirmo haddii meel bannaanka ah la taabto
    $(document).on("click", function (e) {
        if (!$(e.target).closest('.sidebar, .menu-btn').length) {
            $(".sidebar").removeClass("active");
            $(".menu-btn").text("☰");
        }
    });
});