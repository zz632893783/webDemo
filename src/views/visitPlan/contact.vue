<template>
    <div class="contact">
        <div class="area-name">
            Aiiiii<br/>
            Art<br/>
            Center
        </div>
        <div class="contact-list">
            <div class="contact-item">
                <h4 class="role">CMO</h4>
                <h5 class="name">Julianne Chu</h5>
                <p class="email">Julianne@aiiiii.com</p>
            </div>
            <div class="contact-item">
                <h4 class="role">BD</h4>
                <h5 class="name">Saisai Liu</h5>
                <p class="email">aa@aiiiii.com</p>
            </div>
            <div class="contact-item">
                <h4 class="role">Art Director</h4>
                <h5 class="name">Xi Li</h5>
                <p class="email">lixi@aiiiii.com</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            msg: 'contact'
        }
    }
}
</script>
<style lang="stylus" scoped>
.contact {
    font-size: vh(80);
    display: grid;
    grid-template-columns: vw(760 + 384) minmax(0, auto);
    // grid-column-gap: vw(100);
    margin: vh(246 + 50) vw(150) 0 vw(150);
    .area-name {
        font-size: vh(134);
        line-height: vh(148 - 4);
        padding-top: vh(150 + 10);
        padding-left: vh(86);
        color: black;
    }
    .contact-list {
        padding-top: vh(82);
        .contact-item {
            margin-bottom: vh(74);
            .role {
                font-size: vh(58);
                letter-spacing: vw(2);
                color: black;
                // font-family: GT-America-Expanded-Light;
            }
            .name {
                font-size: vh(26);
                letter-spacing: vw(1);
                color: black;
                margin-top: vh(8);
                // font-family: GT-America-Expanded-Light;
            }
            .email {
                font-size: vh(16);
                letter-spacing: vw(0.8);
                color: black;
                margin-top: vh(38);
            }
        }
    }
}
</style>
