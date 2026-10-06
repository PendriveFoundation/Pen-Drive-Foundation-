import {
  FileText,
  ExternalLink,
  ShieldCheck,
  Award,
  Landmark,
  Building2,
} from 'lucide-react';

import { Footer } from '../components/layout/Footer';

const certificates = [
  {
    title: '80G Certificate',
    subtitle: 'Income Tax Exemption',
    detail: 'FY 2025-26 to 2029-30',
    file: '/certificates/80G-Certificate-FY-2025-26-to-2029-30.pdf',
    icon: ShieldCheck,
  },
  {
    title: '12AB Certificate',
    subtitle: 'Income Tax Registration',
    detail: 'FY 2025-26 to 2034-35',
    file: '/certificates/12AB-Certificate-FY-2025-26-to-2034-35.pdf',
    icon: Award,
  },
  {
    title: 'NGO DARPAN Certificate',
    subtitle: 'e-Anudaan / NGO DARPAN',
    detail: 'Official registration document',
    file: '/certificates/NGO-DARPAN-Certificate.pdf',
    icon: Landmark,
  },
  {
    title: 'CSR-1 Certificate',
    subtitle: 'CSR Registration',
    detail: 'Official CSR registration document',
    file: '/certificates/CSR-1-Certificate.pdf',
    icon: FileText,
  },
  {
    title: 'MSME / UDYAM Certificate',
    subtitle: 'Udyam Registration',
    detail: 'Udyam Registration No. UDYAM-AR-05-0000166',
    file: '/certificates/PEN-DRIVE-MSME.pdf',
    icon: Building2,
  },
];

export default function Certificates() {
  return (
    <>
      <main className="min-h-screen bg-[#F7FAF7] text-[#17251E]">

        {/* =====================================================
            HERO
            ===================================================== */}

        <section
          className="
            bg-[#315C42]
            px-5
            pb-20
            pt-32
            text-white
            md:px-10
            md:pb-24
            md:pt-36
            lg:px-16
            lg:pt-40
          "
        >
          <div className="mx-auto max-w-[1250px]">

            <p
              className="
                mb-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/70
              "
            >
              Pen-Drive Foundation
            </p>

            <h1
              className="
                max-w-4xl
                font-serif
                text-5xl
                leading-[0.95]
                tracking-[-0.03em]
                md:text-7xl
              "
            >
              Certificates & Registrations
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-sm
                leading-7
                text-white/75
                md:text-base
              "
            >
              Explore the Foundation’s registration and certification
              documents. Each certificate can be viewed directly below
              or opened in full resolution.
            </p>

          </div>
        </section>


        {/* =====================================================
            CERTIFICATES
            ===================================================== */}

        <section
          className="
            px-5
            pb-20
            pt-16
            md:px-10
            md:pb-28
            md:pt-20
            lg:px-16
          "
        >

          {/* 3 CARDS FIRST ROW + 2 CARDS SECOND ROW */}

          <div
            className="
              mx-auto
              grid
              max-w-[1450px]
              grid-cols-1
              gap-7
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {certificates.map((certificate) => {

              const Icon = certificate.icon;

              return (
                <article
                  key={certificate.file}
                  className="
                    group
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-[#17251E]/10
                    bg-white
                    shadow-[0_10px_35px_rgba(23,37,30,0.07)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_20px_50px_rgba(23,37,30,0.12)]
                  "
                >

                  {/* PDF PREVIEW */}

                  <div
                    className="
                      px-4
                      pt-4
                      md:px-5
                      md:pt-5
                    "
                  >

                    <div
                      className="
                        overflow-hidden
                        rounded-[18px]
                        border
                        border-[#17251E]/10
                        bg-[#F2F5F3]
                        shadow-inner
                      "
                    >

                      <iframe
                        src={`${certificate.file}#toolbar=0&navpanes=0&scrollbar=1`}
                        title={certificate.title}
                        className="
                          block
                          h-[430px]
                          w-full
                          bg-white
                          md:h-[500px]
                        "
                      />

                    </div>

                  </div>


                  {/* CERTIFICATE DETAILS */}

                  <div className="p-6">

                    <div className="flex items-start gap-3">

                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#EAF4EC]
                          text-[#315C42]
                        "
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">

                        <h2
                          className="
                            font-serif
                            text-xl
                            leading-tight
                            tracking-[-0.02em]
                          "
                        >
                          {certificate.title}
                        </h2>

                        <p
                          className="
                            mt-1
                            text-sm
                            font-medium
                            text-[#315C42]
                          "
                        >
                          {certificate.subtitle}
                        </p>

                      </div>

                    </div>


                    <p
                      className="
                        mt-4
                        min-h-[48px]
                        text-sm
                        leading-6
                        text-[#17251E]/60
                      "
                    >
                      {certificate.detail}
                    </p>


                    {/* OPEN FULL CERTIFICATE */}

                    <div className="mt-5">

                      <a
                        href={certificate.file}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          bg-[#315C42]
                          px-5
                          py-3
                          text-xs
                          font-semibold
                          text-white
                          shadow-[0_8px_20px_rgba(49,92,66,0.18)]
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:bg-[#234A33]
                          hover:shadow-[0_12px_25px_rgba(49,92,66,0.25)]
                        "
                      >
                        Open Full Certificate

                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>

                    </div>

                  </div>

                </article>
              );

            })}

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <Footer />
    </>
  );
}