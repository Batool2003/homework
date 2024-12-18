
$(document).ready(function() {
    // إظهار وإخفاء تفاصيل الكتاب
    $('.show-details').click(function() {
        $(this).closest('tr').next('.details-row').toggle();
    });

    
});




$(document).ready(function () {
    // عرض النموذج عند الضغط على زر المتابعة
    $("#showFormBtn").click(function () {
        $("#applicationForm").css("display", "block");
        $(this).hide(); // إخفاء زر المتابعة
    });

    // التحقق من البيانات عند الضغط على زر الإرسال
    $("#submitBtn").click(function () {
        let isValid = true;

        // الاسم الكامل: التحقق من الأحرف العربية فقط
        let fullName = $("#fullName").val();
        if (!/^[\u0600-\u06FF\s]+$/.test(fullName)) {
            $("#nameError").show();
            isValid = false;
        } else {
            $("#nameError").hide();
        }

        // الرقم الوطني: 11 خانة وأول خانتين للمحافظة
        let nationalId = $("#nationalId").val();
        let validProvinces = ["10", "02", "03", "04", "05", "06", "07", "08", "09", "13", "14"];
        if (!/^\d{11}$/.test(nationalId) || !validProvinces.includes(nationalId.substring(0, 2))) {
            $("#idError").show();
            isValid = false;
        } else {
            $("#idError").hide();
        }

        // تاريخ الميلاد: بالشكل dd-mm-yyyy
        let dob = $("#dob").val();
        if (!/^\d{2}-\d{2}-\d{4}$/.test(dob)) {
            $("#dobError").show();
            isValid = false;
        } else {
            $("#dobError").hide();
        }

        // رقم الموبايل: يجب أن يتطابق مع شبكتي Syriatel وMTN
        let phone = $("#phone").val();
        if (!/^(09[3-6,8-9]\d{7})$/.test(phone)) {
            $("#phoneError").show();
            isValid = false;
        } else {
            $("#phoneError").hide();
        }

        // البريد الإلكتروني: التحقق من صحة الشكل
        let email = $("#email").val();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            $("#emailError").show();
            isValid = false;
        } else {
            $("#emailError").hide();
        }

        // عرض رسالة النجاح إذا كانت جميع البيانات صحيحة
        if (isValid) {
            $("#successMessage").show();
        } else {
            $("#successMessage").hide();
        }
    });
});
