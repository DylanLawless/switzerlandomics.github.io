Modern artificial intelligence did not begin in 2012. Neural networks had existed for decades. Back-propagation was established as a practical method for training multilayer networks in the 1980s [Rumelhart et al., 1986], and LeCun and colleagues demonstrated convolutional neural networks for handwritten character recognition soon afterwards [LeCun et al., 1989]. By the end of the 1990s, systems such as LeNet already contained many of the architectural ideas recognisable in modern convolutional networks [LeCun et al., 1998].

For much of the following decade, however, neural networks were not the dominant approach to machine learning. Support vector machines, boosting, probabilistic models, random forests and specialised statistical methods performed strongly on many practical tasks. Neural networks were difficult to train at large scale, datasets were smaller, and available computers restricted the size of useful experiments.

Two developments changed this. The first was data. ImageNet assembled millions of labelled images and established a large-scale benchmark for object recognition [Deng et al., 2009]. The second was computation.

Graphics processors had been designed to execute many similar numerical operations in parallel. Researchers began exploiting this architecture for general numerical computation during the early 2000s. At Stanford, Ian Buck and colleagues developed Brook for GPUs, which provided a high-level programming model for using graphics processors as general-purpose parallel computers [Buck et al., 2004]. NVIDIA hired Buck in 2004. He subsequently became one of the central architects of CUDA.

NVIDIA introduced CUDA with its G80 generation in 2006 and made the programming environment publicly available in 2007. CUDA removed much of the need to express numerical computation through graphics operations. A researcher could now write programs explicitly for thousands of parallel arithmetic operations. This decision preceded the modern deep-learning boom by several years.

NVIDIA's direction was broader than machine learning. Jensen Huang was building a company around accelerated computing rather than predicting one particular neural-network architecture. Ian Buck provided an important software and architectural bridge between graphics hardware and general computation. Bill Dally, a leading parallel-computing researcher at Stanford, joined NVIDIA as chief scientist in 2009. By the beginning of the 2010s, NVIDIA therefore had hardware, a programming model and senior technical leadership organised around massively parallel computation.

Deep-learning researchers were already beginning to use that infrastructure. GPU implementations produced substantial accelerations for neural-network training [Raina et al., 2009]. Cireşan and colleagues showed that large neural networks trained on GPUs could achieve excellent image-recognition results before ImageNet 2012 [Cireşan et al., 2010]. Deep neural networks were also producing important advances in speech recognition [Dahl et al., 2012]. AlexNet was therefore not the first successful use of GPUs for machine learning.

It was nevertheless a decisive demonstration.

Alex Krizhevsky, Ilya Sutskever and Geoffrey Hinton trained a large convolutional neural network on ImageNet using two NVIDIA GTX 580 GPUs [Krizhevsky et al., 2012]. Its top-five error in the ImageNet competition was 15.3%, compared with 26.2% for the second-best entry. The underlying principles were not new. Convolution, back-propagation and multilayer neural networks had existed for decades. What changed was their scale. Large labelled datasets, GPU computation and several practical improvements made it possible to train a substantially larger model and demonstrate a clear advantage over the prevailing computer-vision methods.

The result changed the direction of the field. Computer vision moved rapidly towards deep neural networks, followed by speech and other domains. NVIDIA responded by making its hardware increasingly specific to these workloads. cuDNN provided optimised GPU implementations of the operations repeatedly required by deep neural networks [Chetlur et al., 2014]. Later GPU generations added specialised tensor operations. The GPU evolved from a graphics processor that happened to be useful for neural networks into hardware deliberately designed for them.

A second transition came from architecture. The Transformer replaced recurrent computation with attention operations that could be parallelised efficiently [Vaswani et al., 2017]. This fitted GPU hardware particularly well. Increasing model size, dataset size and computation then became a productive engineering strategy. GPT [Radford et al., 2018], GPT-2 [Radford et al., 2019] and GPT-3 [Brown et al., 2020] showed progressively stronger language capabilities as this approach was scaled.

GPT-3 was an important technical demonstration, but it was not the event that brought large language models to most people. Access was initially provided through an API. ChatGPT, released publicly on 30 November 2022, placed a conversational interface around a model from the GPT-3.5 family [OpenAI, 2022]. The result exposed large-scale neural language models directly to a general audience rather than principally to researchers and developers.

The modern AI movement therefore has several distinct origins. LeCun, Hinton and other researchers developed and preserved the neural-network methods. ImageNet supplied the scale of data needed for a convincing visual benchmark. Krizhevsky and Sutskever demonstrated what happened when those methods were trained at much greater computational scale. Vaswani and colleagues introduced an architecture especially suited to that scale. OpenAI later demonstrated how far language models could be pushed and made them directly accessible to the public.

NVIDIA's role is different but equally concrete. It built the computational platform before deep learning had established that it needed one. Buck and NVIDIA made massively parallel GPU computation accessible through CUDA. Dally strengthened the company's emphasis on parallel computer architecture. Huang continued committing the company to accelerated computing as neural networks became increasingly computationally demanding. When the decisive deep-learning results appeared in 2012, much of the required computing infrastructure already existed.

The algorithms had a long history. The change was that they could finally be run at sufficient scale.

### References

Brown, T. B. et al. Language Models are Few-Shot Learners. *NeurIPS*, 2020.

Buck, I. et al. Brook for GPUs: Stream Computing on Graphics Hardware. *ACM Transactions on Graphics*, 2004.

Chetlur, S. et al. cuDNN: Efficient Primitives for Deep Learning. 2014.

Cireşan, D. C. et al. Deep, Big, Simple Neural Nets for Handwritten Digit Recognition. *Neural Computation*, 2010.

Dahl, G. E. et al. Context-Dependent Pre-Trained Deep Neural Networks for Large-Vocabulary Speech Recognition. *IEEE Transactions on Audio, Speech, and Language Processing*, 2012.

Deng, J. et al. ImageNet: A Large-Scale Hierarchical Image Database. *CVPR*, 2009.

Krizhevsky, A., Sutskever, I. and Hinton, G. E. ImageNet Classification with Deep Convolutional Neural Networks. *NeurIPS*, 2012.

LeCun, Y. et al. Backpropagation Applied to Handwritten Zip Code Recognition. *Neural Computation*, 1989.

LeCun, Y. et al. Gradient-Based Learning Applied to Document Recognition. *Proceedings of the IEEE*, 1998.

OpenAI. ChatGPT: Optimizing Language Models for Dialogue. 2022.

Radford, A. et al. Improving Language Understanding by Generative Pre-Training. 2018.

Radford, A. et al. Language Models are Unsupervised Multitask Learners. 2019.

Raina, R., Madhavan, A. and Ng, A. Y. Large-Scale Deep Unsupervised Learning Using Graphics Processors. *ICML*, 2009.

Rumelhart, D. E., Hinton, G. E. and Williams, R. J. Learning Representations by Back-Propagating Errors. *Nature*, 1986.

Vaswani, A. et al. Attention Is All You Need. *NeurIPS*, 2017.
