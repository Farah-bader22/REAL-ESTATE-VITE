<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';

const name = ref('');
const email = ref('');
const phone = ref('');
const inquiry = ref('');
const toast = useToast();

const handleSubmit = () => {
  console.log('Form Submitted:', { name: name.value, email: email.value, phone: phone.value, inquiry: inquiry.value });
  name.value = '';
  email.value = '';
  phone.value = '';
  inquiry.value = '';
};
</script>

<template>
  <div class="contact-view container animate-in">
    <h1 class="lux-heading contact-heading animate-in">Connect with Our Elite Team</h1>
    <p class="contact-subtitle animate-in">We are committed to providing world-class, discreet service. Please fill out the form below for a prompt, private response from our dedicated consultant.</p>

    <div class="contact-grid">
        <div class="form-wrapper animate-in">
            <form @submit.prevent="handleSubmit" class="p-fluid contact-form">
                <div class="p-field mb-4">
                    <label for="name" class="p-d-block">Your Full Name</label>
                    <InputText id="name" v-model="name" type="text" required class="custom-input"/>
                </div>
                <div class="p-field mb-4">
                    <label for="email" class="p-d-block">Email Address</label>
                    <InputText id="email" v-model="email" type="email" required class="custom-input"/>
                </div>
                <div class="p-field mb-4">
                    <label for="phone" class="p-d-block">Phone Number</label>
                    <InputText id="phone" v-model="phone" type="text" class="custom-input"/>
                </div>
                <div class="p-field mb-5">
                    <label for="inquiry" class="p-d-block">Your Inquiry / Message</label>
                    <Textarea id="inquiry" v-model="inquiry" rows="6" cols="30" required autoResize class="custom-textarea"/>
                </div>

                <Button type="submit" label="Send Private Request" class="p-button-gold submit-btn" icon="pi pi-envelope" />
            </form>
        </div>

        <div class="contact-info-panel animate-in">
            <h3 class="info-panel-heading">Our Global Headquarters</h3>
            <p class="info-item">📍 1000 Park Avenue, New York, NY 10028, USA</p>
            <p class="info-item">📞 +1 (555) 123-4567</p>
            <p class="info-item">📧 info@exclusive-realestate.com</p>
            <p class="info-item mt-4">For urgent matters, please call us directly.</p>

            <h3 class="info-panel-heading mt-5">Connect with Us</h3>
            <div class="social-links">
                <a href="#" class="social-icon"><i class="pi pi-facebook"></i></a>
                <a href="#" class="social-icon"><i class="pi pi-twitter"></i></a>
                <a href="#" class="social-icon"><i class="pi pi-linkedin"></i></a>
                <a href="#" class="social-icon"><i class="pi pi-instagram"></i></a>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.contact-view {
    padding: 60px 5%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}
/* ... (تنسيقات CSS الأخرى) ... */
.contact-heading {
    margin-bottom: 15px;
    color: var(--color-text);
}

.contact-subtitle {
    font-size: 1.2rem;
    color: var(--color-subtitle);
    margin-bottom: 60px;
    line-height: 1.6;
}

.contact-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
    align-items: flex-start;
}

.form-wrapper {
    background: var(--color-card-background);
    border: 2px solid var(--color-gold);
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 0 30px rgba(212, 175, 55, 0.2);
    animation: fadeIn 1s ease-out 0.3s forwards;
}

.p-field label {
    color: var(--color-gold);
    font-size: 1.1rem;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    margin-bottom: 8px;
    text-align: left;
    display: block;
}

.custom-input, .custom-textarea {
    border: 1px solid var(--color-card-border) !important;
    background-color: rgba(255, 255, 255, 0.05) !important;
    color: var(--color-text) !important;
    padding: 12px 15px;
    border-radius: 8px;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.custom-input:focus, .custom-textarea:focus {
    border-color: var(--color-gold) !important;
    box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.5) !important;
}

.contact-info-panel {
    background: var(--color-card-background);
    border: 1px solid var(--color-card-border);
    border-radius: 15px;
    padding: 40px;
    text-align: left;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1s ease-out 0.5s forwards;
}

.info-panel-heading {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: var(--color-gold);
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(212, 175, 55, 0.3);
    padding-bottom: 10px;
}

.info-item {
    color: var(--color-text);
    font-size: 1.1rem;
    margin-bottom: 15px;
    line-height: 1.6;
    display: flex;
    align-items: center;
    gap: 10px;
}

.info-item i {
    color: var(--color-gold);
    font-size: 1.2rem;
}

.social-links {
    margin-top: 30px;
    display: flex;
    gap: 20px;
}

.social-icon {
    font-size: 2rem;
    color: var(--color-subtitle);
    transition: color 0.3s;
}

@media (max-width: 992px) {
    .contact-grid {
    
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .contact-info-panel, .form-wrapper {
        /* زيادة حجم المحتوى اللوحي/النموذج لملء العرض */
        padding: 30px;
    }

    .contact-heading {
        font-size: 2.2rem;
    }
}

/* للهواتف المحمولة (Mobiles) */
@media (max-width: 600px) {
    .contact-view {
        padding: 40px 4%; /* تقليل الحشو حول الصفحة */
    }

    .contact-subtitle {
        font-size: 1rem;
        margin-bottom: 40px;
    }

    .form-wrapper {
        border: none; /* إزالة الحدود الكبيرة على الشاشات الصغيرة لتحسين المظهر */
        box-shadow: none;
        padding: 20px;
    }

    .info-panel-heading {
        font-size: 1.5rem;
    }

    .submit-btn {
        width: 100%; /* جعل زر الإرسال يملأ عرض الشاشة */
    }
}
</style>
