<template>
    <nav class="navbar navbar-expand-lg bg-light mb-4">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                <img src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg" height="60" alt="Logo"
                    loading="lazy" />
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/product">Products</router-link>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: "HeaderComponent"
}
</script>